/* eslint-disable */

import { readFileSync } from "node:fs";
import { cwd } from "node:process";
import path from "node:path";
import stylish from "../src/formatters/stylish.js";
import plain from "../src/formatters/plain.js";
import getDiff from "../src/getDiff.js";
import getFormat from "../src/getFormat.js";

const getPath = (filename) => {
  const __dirname = cwd();
  return path.resolve(__dirname, "__fixtures__", filename);
}

const readFile = (path) => readFileSync(path, 'utf-8');

const jsonFile3 = readFile(getPath('file3.json'));
const jsonFile4 = readFile(getPath('file4.json'));
const stylishRes = readFile(getPath('stylishRes.txt'))

test("Check stylish format", () => {
  const result = stylish(getDiff(getFormat(jsonFile3, 'file3.json'), getFormat(jsonFile4, 'file4.json')));
  expect(result).toBe(stylishRes);
});

test("Check plain format", () => {
});
