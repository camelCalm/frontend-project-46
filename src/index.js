import { readFileSync } from 'node:fs';
import path from 'node:path';
import { cwd } from 'node:process';
import getDiff from './getDiff.js';
import getFormat from './getFormat.js';

export default (filepath1, filepath2) => {
    let __dirname = cwd();
    let path1 = path.resolve(__dirname, '__fixtures__', filepath1);
    let path2 = path.resolve(__dirname, '__fixtures__', filepath2);

    let file1 = readFileSync(path1);
    let file2 = readFileSync(path2);

    console.log(getDiff(getFormat(file1, filepath1), getFormat(file2, filepath2)));
};
