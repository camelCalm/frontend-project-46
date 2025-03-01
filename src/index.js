import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';
import path from 'node:path';
import parseJSON from './parse/parseJSON.js';

export default (firstFile, secondFile) => {
    let currentDir = cwd();

    let typeOfFirstFile = path.resolve(currentDir, './public', firstFile);
    let typeOfSecondFile = path.resolve(currentDir, './public', secondFile);

    return parseJSON(readFileSync(typeOfFirstFile), readFileSync(typeOfSecondFile));
};
