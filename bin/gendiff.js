#! /usr/bin/env node

import index from '../src/index.js';
import { Command } from 'commander';

let program = new Command();

program
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .option('-f, --format', '[type]  output format')
    .arguments('<filepath1> <filepath2>')
    .action((filepath1, filepath2) => {
        index(filepath1, filepath2)
    });

program.parse()