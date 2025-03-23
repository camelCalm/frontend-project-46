/* eslint-disable */

import { readFileSync } from "node:fs";
import { cwd } from "node:process";
import path from "node:path";
import stylish from "../src/formatters/stylish.js";
import plain from '../src/formatters/plain.js';
import getDiff from "../src/getDiff.js";
import getFormat from "../src/getFormat.js";

const getPath = (filename) => {
  const __dirname = cwd();
  return path.resolve(__dirname, "__fixtures__", filename);
}

const readFile = (path) => readFileSync(path, 'utf-8');

const jsonFile3 = readFile(getPath('file3.json'));
const jsonFile4 = readFile(getPath('file4.json'));
const yamlFile1 = readFile(getPath('file1.yaml'));
const yamlFile2 = readFile(getPath('file2.yaml'));
const stylishRes = readFile(getPath('stylishRes.txt'));
const plainRes = readFile(getPath('plainRes.txt'));

test("Check STYLISH format with JSON", () => {
  const result = stylish(getDiff(getFormat(jsonFile3, 'file3.json'), getFormat(jsonFile4, 'file4.json')));
  expect(result).toBe(stylishRes);
});

test("Check STYLISH format with YAML", () => {
  const result = stylish(getDiff(getFormat(yamlFile1, 'file1.yaml'), getFormat(yamlFile2, 'file2.yaml')));
  expect(result).toBe(stylishRes);
});

test("Check PLAIN format with JSON", () => {
  const result = plain(getDiff(getFormat(jsonFile3, 'file3.json'), getFormat(jsonFile4, 'file4.json')));
  expect(result).toBe(plainRes);
});

test("Check PLAIN format with YAML", () => {
  const result = plain(getDiff(getFormat(yamlFile1, 'file1.yaml'), getFormat(yamlFile2, 'file2.yaml')));
  expect(result).toBe(plainRes);
});