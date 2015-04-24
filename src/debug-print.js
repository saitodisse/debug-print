import DebugClass from './debug-class';
var stringUtils = require('./string-utils');
var util = require('util');

export default {

  _create(subject, enable_string) {
    if (!process.env.DEBUG) {
      return;
    }

    if (!this._debug_instances) {
      this._debug_instances = {};
    }

    // already instantiated?
    if (this._debug_instances[subject]) {
      // return the instance
      return this._debug_instances[subject];
    }

    this._debug_instances[subject] = new DebugClass(subject, enable_string);
    this._depth_env = parseInt(process.env.DEPTH) || null;

    return this;
  },

  _custom_console_log(obj) {
    console.log(obj);
  },

  debug(obj, subject, _custom_console_log) {
    if (!process.env.DEBUG) {
      // if no env.DEBUG go away
      return obj.return_data;
    }

    if (!this._debug_instances) {
      // create _debug_instances list
      this._debug_instances = {};
    }

    if (!this._debug_instances[subject]) {
      // create new _debug_instances for this subject
      this._create(subject);
    }
    if (!this._debug_instances[subject].enabled) {
      // if debug is disabled go away
      return obj.return_data;
    }

    if (_custom_console_log) {
      // replaces default _custom_console_log
      this._custom_console_log = _custom_console_log;
    }

    // get current _debug_instances and replaces log
    var log = this._debug_instances[subject];
    log.log = this._custom_console_log.bind(this); // don't forget to bind to console!

    switch (process.env.DEBUG_STYLE) {
      case '1':
      case 'small':
        log(this._print_small(obj));
        break;
      case '2':
      case 'detail':
        log(this._print_detail(obj));
        break;
      default:
        log(this._print_small(obj));
        break;
    }

    return obj.return_data;
  },

  _print_small(obj) {

    var function_name = obj.name + ' (' + obj.line.original_line + ')';

    var functionPadRightNumber = 30;
    if (process.env.DEBUG_FUNCTION_PAD_RIGHT) {
      functionPadRightNumber = Number(process.env.DEBUG_FUNCTION_PAD_RIGHT);
    }
    function_name = stringUtils.padRightWithDotsIfBigger(function_name, functionPadRightNumber);

    return '    ' + function_name;
  },

  _print_detail(obj) {
    // print arguments
    var arguments_string = '';
    for (var i = 0; i < obj.arguments.length; i++) {
      arguments_string += util.inspect(obj.arguments[i],
        { showHidden:false, colors:true, depth: this._depth_env || null });
      if (i !== obj.arguments.length - 1) {
        arguments_string += ', ';
      }
    }

    return [
      '',
      '    ' + obj.line.original_line + ' | ' + obj.name + ' (' + arguments_string + ')',
      '      |   returned: ' + util.inspect(obj.return_data,
        { showHidden:false, colors:true, depth: this._depth_env || null }),
      '      |   time elapsed:',
    ].join('\n');

  }

};
