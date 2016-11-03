#!/usr/bin/env node

const packageJSON = require('../package.json');
const path = require('path');
const birl = require(path.resolve(__dirname, '..', packageJSON.main));

birl();
