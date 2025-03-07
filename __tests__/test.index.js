/* eslint-disable */

import stylish from "../src/formatters/stylish.js";
import { readFileSync } from "node:fs";
import { cwd } from "node:process";
import path from "node:path";

const getPath = (filename) => {
  const __dirname = cwd();
  return path.resolve(__dirname, "__fixtures__", filename);
}

const readFile = (path) => readFileSync(path, 'utf-8');

const jsonFile1 = readFile(getPath('file1.json'));
const jsonFile2 = readFile(getPath('file2.json'));
const jsonFile3 = readFile(getPath('file3.json'));
const jsonFile4 = readFile(getPath('file4.json'));


const stylishRes1 = readFile(getPath('stylishRes1.txt'));
const stylishRes2 = readFile(getPath('stylishRes2.txt'));

test("Check stylish format", () => {
  // expect(stylish(jsonFile3, jsonFile4)).toBe(stylishRes2);
});
