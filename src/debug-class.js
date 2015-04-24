var debug = require('debug');
var S = require('string');

export default class DebugClass {
  constructor(name, enable_string) {

    if (enable_string) {
      debug.enable(enable_string);
    }

    var final_name = name;

    var subjectRightNumber = 50;
    if (process.env.DEBUG_SUBJECT_RIGHT) {
      subjectRightNumber = Number(process.env.DEBUG_SUBJECT_RIGHT);
    }
    final_name = '..' + S(final_name).right(subjectRightNumber - 2).s;

    this.name = final_name;
    this._debug_instances = debug(final_name);
    return this._debug_instances;
  }
}
