/* eslint-disable */

import parseJson from "../src/formatters/parseJson.js";
import { readFileSync } from "node:fs";
import { cwd } from "node:process";
import path from "node:path";

test("Check JSON parse function", () => {
  let answer = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  let __dirname = cwd();
  let file1 = readFileSync(
    path.resolve(__dirname, "__fixtures__", "file1.json")
  );
  let file2 = readFileSync(
    path.resolve(__dirname, "__fixtures__", "file2.json")
  );

  expect(parseJson(file1, file2)).toBe(answer);
});
