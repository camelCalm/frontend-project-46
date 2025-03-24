import { readFileSync } from "node:fs";
import { cwd } from "node:process";
import path from "node:path";
import index from '../src/formatters/index.js';

const getPath = (filename) => {
  const __dirname = cwd();
  return path.resolve(__dirname, "__fixtures__", filename);
}

const readFile = (path) => readFileSync(path, 'utf-8');

const checkArray = [
  ['stylish', 'file3.json', 'file4.json', 'stylishRes.txt'],
  ['stylish', 'file1.yaml', 'file2.yaml', 'stylishRes.txt'],
  ['plain', 'file3.json', 'file4.json', 'plainRes.txt'],
  [, 'file3.json', 'file4.json', 'stylishRes.txt'],
];

test.each(checkArray)('work function with parameters', (format, nameFile1, nameFile2, nameResult) => {
  const result = readFile(getPath(nameResult));

  expect(index(format, nameFile1, nameFile2)).toBe(result);
});