#!/usr/bin/env node

var Surfer = require('./')
var args = require('minimist')(process.argv.slice(2))

if (args.version) {
  console.log(require('./package.json').version)
  process.exit(1)
}


