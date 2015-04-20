#!/usr/bin/env node

require('source-map-support').install();

var inner = require('./folder/file2.js');

function sum(a, b) {
  var __return__ = require('../index').debug({ name: 'sum', arguments: arguments, line: {original_line: 7}, return_data: a + b }, __filename);
  return  __return__;
}

var times = function (options) {
  var __return__ = require('../index').debug({ name: 'times', arguments: arguments, line: {original_line: 11}, return_data: { result: options.a * options.b } }, __filename);
  return __return__;
};

// RUN async
var total = 0;

total = total + sum(1, 1);
total = total + inner.sum_inner(-4, 6);
setTimeout(function () {
  total = total + times({a: 2, b: 3}).result;
  total = total + inner.sum_inner(0, 2);
  console.log('total:', total);
}, 200);
