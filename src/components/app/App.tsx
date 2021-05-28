import React from 'react';
import './app.scss';

import About from '../../pages/about/About';
import Header from '../header/Header';
import Portfolio from '../../pages/portfolio/Portfolio';
import Contact from '../../pages/contact/Contact';
import Home from '../../pages/home/Home';
import Footer from '../footer/Footer';

type RefContextData = {
    aboutRef: any;
    homeRef: any;
    portfolioRef: any;
    contactRef: any;
    scrollToAbout: () => void;
    scrollToHome: () => void;
    scrollToPortfolio: () => void;
    scrollToContact: () => void;
}

export const RefContext = React.createContext({} as RefContextData);
export const useRefContext = () => React.useContext(RefContext);

const App = React.memo(() => {

    const aboutRef = React.useRef(null);
    const homeRef = React.useRef(null);
    const portfolioRef = React.useRef(null);
    const contactRef = React.useRef(null);
    const scrollToAbout = () => { aboutRef.current.scrollIntoView({ behavior: 'smooth' }) };
    const scrollToHome = () => { homeRef.current.scrollIntoView({ behavior: 'smooth' }) };
    const scrollToPortfolio = () => { portfolioRef.current.scrollIntoView({ behavior: 'smooth' }) };
    const scrollToContact = () => { contactRef.current.scrollIntoView({ behavior: 'smooth' }) };

    return (
        <RefContext.Provider value={{
            aboutRef, scrollToAbout,
            homeRef, scrollToHome,
            portfolioRef, scrollToPortfolio,
            contactRef, scrollToContact,
        }}>
            <Home />
            <Header />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </RefContext.Provider>
    );
});

export default App;