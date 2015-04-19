#!/usr/bin/env node

require('source-map-support').install();

var inner = require('./folder/file2.js');

function sum(a, b) {
  /*--*/var __debug_data__ = {     /*--debug-print--*/
  /*--*/  name: 'sum',             /*--debug-print--*/
  /*--*/  arguments: arguments,    /*--debug-print--*/
  /*--*/  line: {original_line: 9} /*--debug-print--*/
  /*--*/};                         /*--debug-print--*/

  /*--*/__debug_data__.return_data = a + b;        /*--debug-print--*/
  /*--*/require('../index').debug(__debug_data__, __filename); /*--debug-print--*/
  /*--*/return __debug_data__.return_data;         /*--debug-print--*/
}

var times = function (options) {
  /*--*/var __debug_data__ = {      /*--debug-print--*/
  /*--*/  name: 'times',            /*--debug-print--*/
  /*--*/  arguments: arguments,     /*--debug-print--*/
  /*--*/  line: {original_line: 21} /*--debug-print--*/
  /*--*/};                          /*--debug-print--*/

  /*--*/__debug_data__.return_data = { result: options.a * options.b }; /*--debug-print--*/
  /*--*/require('../index').debug(__debug_data__, __filename);                      /*--debug-print--*/
  /*--*/return __debug_data__.return_data;                  /*--debug-print--*/
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
