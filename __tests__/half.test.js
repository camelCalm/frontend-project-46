import parseJSON from '../src/parse/parseJSON.js';
import path from 'node:path';
import { cwd } from 'node:process';
import { readFileSync } from 'node:fs';

let __dirname = cwd();
let path1 = path.resolve(__dirname, '__fixtures__', 'filepath1.json');
let path2 = path.resolve(__dirname, '__fixtures__', 'filepath2.json');
let path3 = path.resolve(__dirname, '__fixtures__', 'filepath3.json');
let path4 = path.resolve(__dirname, '__fixtures__', 'filepath4.json');

test('first', () => {
    let answerOfFunc = parseJSON(readFileSync(path1), readFileSync(path2));
    let correctAnswer = 
`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`
    expect(correctAnswer).toEqual(answerOfFunc);
});

test('two', () => {
  let answerOfFunc = parseJSON(readFileSync(path2), readFileSync(path3));
  let correctAnswer =
`{
  - host: hexlet.io
  + host: toyou.io
  - timeout: 20
  + timeout: 55
  - verbose: true
  + follow: true
  + proxy: 124.444.53.22
}`
expect(correctAnswer).toEqual(answerOfFunc);
});
