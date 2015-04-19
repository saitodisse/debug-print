var debug = require('debug');

export default class DebugClass {
  constructor(name, enable_string) {

    if (enable_string) {
      debug.enable(enable_string);
    }

    this.name = name;
    this._debug_instances = debug(name);
    return this._debug_instances;
  }
}
