const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const DotEnv = require("dotenv-webpack");

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
    new CopyWebpackPlugin({
        patterns: [{ from: './src/assets/images/favicon.ico' }]
    }), new DotEnv()],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(js)x?$/i,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(s)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp|svg|ttf)$/,
                include: path.join(__dirname, 'src/assets'),
                loader: 'file-loader'
            },
            {
                test: /\.(ts)x?$/i,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ]
    },
    devServer: {
        port: 3000,
        writeToDisk: true
    }
}