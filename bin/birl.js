#!/usr/bin/env node

const packageJSON = require(`${process.env.PWD}/package.json`);
const birl = require(`${process.env.PWD}/${packageJSON.main}`);

console.log(birl());
