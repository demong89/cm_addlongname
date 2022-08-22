#!/usr/bin/env node
"use strict";

const { readFileSync,writeFileSync } = require('fs');
const path = require('path');
const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap;

let res = readFileSync(path.join(__dirname, '.cz-config.js'), 'utf-8');

writeFileSync('.cz-config.js',res)

bootstrap({
  cliPath: path.join(__dirname, '../../../node_modules/commitizen'),
  // this is new
  config: {
      "path": "cz-customizable"
    // "path": "cz-conventional-changelog"

  }
});




// "path": "cz-conventional-changelog"
