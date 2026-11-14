import path from "path";
import fs from "fs";
import { parse } from "csv-parse/sync";

function readCsv(pathFile: string) {
  path.resolve(__dirname, "");
  const fileData = fs.readFileSync(pathFile, { encoding: "utf-8" });

  const csvDataArr = parse(fileData, {
    columns: true,
    trim: true,
    skip_empty_lines: true,
  });

  return csvDataArr;
}
