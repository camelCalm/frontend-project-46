#! /usr/bin/env node

import index from '../src/formatters/index.js';
import { Command } from 'commander';

const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .arguments('<filepath1>, <filepath2>')
    .option('-f, --format <type>', 'output format')
    .action((argument1, argument2) => {
        console.log(index(program.opts().format, argument1, argument2));
    });

program.parse(process.argv);
