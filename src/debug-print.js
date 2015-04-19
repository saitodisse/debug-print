import DebugClass from './debug-class';

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

  _console_log(obj) {
    console.log(obj);
    console.log('');
  },

  debug(obj, subject) {
    if (!process.env.DEBUG) {
      return;
    }
    if (!this._debug_instances) {
      this._debug_instances = {};
    }
    if (!this._debug_instances[subject]) {
      this._create(subject);
    }
    if (!this._debug_instances[subject].enabled) {
      return;
    }

    var log = this._debug_instances[subject];
    log.log = this._console_log.bind(this); // don't forget to bind to console!

    var arguments_string = '';
    for (var i = 0; i < obj.arguments.length; i++) {
      arguments_string += util.inspect(obj.arguments[i],
        { showHidden:false, colors:true, depth: this._depth_env || null });
      if (i !== obj.arguments.length - 1) {
        arguments_string += ', ';
      }
    }

    var final_log = [
      '',
      '    ' + obj.line.original_line + ' | ' + obj.name + ' (' + arguments_string + ')',
      '      |   returned: ' + util.inspect(obj.return_data,
        { showHidden:false, colors:true, depth: this._depth_env || null }),
      '      |   time elapsed:',
    ].join('\n');

    log(final_log);
  }

};
