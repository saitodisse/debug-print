/*--*/var debug = require('debug')('inner/file2.js');  /*--debug-print--*/
/*--*/var __astLoggerPrint__ = require('../../index'); /*--debug-print--*/

module.exports = {
  sum_inner: function(a, b) {
    /*--*/var __debug_data__ = {       /*--debug-print--*/
    /*--*/    name: 'sum_inner',       /*--debug-print--*/
    /*--*/    arguments: arguments,    /*--debug-print--*/
    /*--*/    line: {original_line: 6} /*--debug-print--*/
    /*--*/};                           /*--debug-print--*/

    /*--*/__debug_data__.return_data = a + b;        /*--debug-print--*/
    /*--*/__astLoggerPrint__(debug, __debug_data__); /*--debug-print--*/
    /*--*/return __debug_data__.return_data;         /*--debug-print--*/
  }
};
