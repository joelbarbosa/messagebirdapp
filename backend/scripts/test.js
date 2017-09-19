'use strict';

require('babel-register');
const babel = require('babel-core');
const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');

process.env.NODE_ENV = 'test';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

let testDir = process.env.TEST_DIR;

const mocha = new Mocha({
  ui: 'bdd',
  retries: 0
});

function walkDir(root) {
    const stat = fs.statSync(root);

    if (stat.isDirectory()) {
        const dirs = fs.readdirSync(root).filter(item => !item.startsWith('.'));
        let results = dirs.map(sub => walkDir(`${root}/${sub}`));
        return [].concat(...results);
    } else {
        return root;
    }
}

walkDir(testDir).filter(function(file){
    // Only keep the .js files
    return file.substr(-3) === '.js';
}).forEach(function(file){
    mocha.addFile(
        path.join(file)
    );
});

mocha.run((failures) => {
  process.on('exit', function () {
    process.exit(failures);
  });
}).on('end', function() {
  process.exit(0);
});