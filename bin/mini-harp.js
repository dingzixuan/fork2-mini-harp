#!/usr/bin/env node
var argv = require("minimist")(process.argv.slice(2));
var createMiniHarp = require("mini-harp");
var app = createMiniHarp(argv._[0]);
