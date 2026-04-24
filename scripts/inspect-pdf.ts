import { readFile } from "node:fs/promises";
import { PDFParse } from "pdf-parse";
import { PDF_PATH } from "./lib/paths";

async function main(): Promise<void> {
  const buf = await readFile(PDF_PATH);
  const parser = new PDFParse({ data: new Uint8Array(buf) });
  const r = await parser.getText();
  await parser.destroy();

  console.log("--- first 800 chars ---");
  console.log(r.text.slice(0, 800));
}

main();
