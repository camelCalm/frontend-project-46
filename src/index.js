import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';
import path from 'node:path';
import parseJSON from './parse/parseJSON.js';

export default (firstFile, secondFile) => {
    let __dirname = cwd();

    let typeOfFirstFile = path.resolve(__dirname, '__fixtures__', firstFile);
    let typeOfSecondFile = path.resolve(__dirname, '__fixtures__', secondFile);

    console.log(parseJSON(readFileSync(typeOfFirstFile), readFileSync(typeOfSecondFile)));
};
