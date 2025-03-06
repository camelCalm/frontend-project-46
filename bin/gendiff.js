#! /usr/bin/env node

import { Command } from 'commander';

let program = new Command();

program
    .description('Compares two configuration files and shows a difference.')
    .option('-V, --version', 'output the version number');

program.parse()