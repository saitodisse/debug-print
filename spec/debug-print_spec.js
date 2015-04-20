import h from './spec-helper';
var debugPrint = require('../../index');

/**
 * instrumenter (static class)
 */
describe('debugPrint:', function() {

  before(function () {
    process.env.DEBUG = '*';
  });

  it('debugPrint must exist on index.js', function () {
    h.expect(debugPrint).to.not.be.undefined;
  });

  it('should create a new debug', function () {
    var _debug = debugPrint._create('new_file', '*');
    h.expect(_debug).to.not.be.undefined;
  });

  it('should log a message', function (done) {
    var _debug = debugPrint._create('NAME', '*');

    var _data = {
      name: 'MY_INCREDIBLE_FUNCTION',
      arguments: arguments,
      line: {original_line: 9},
      return_data: 1
    };

    _debug.debug(_data, null, function (result) {
      h.expect(result).to.match(/MY_INCREDIBLE_FUNCTION/);
      done();
    });
  });

  it('should log a message without call create', function () {
    var _data = {
      name: 'MY_INCREDIBLE_FUNCTION',
      arguments: arguments,
      line: {original_line: 9},
      return_data: 1
    };

    debugPrint.debug(_data, 'NAME2', function (result) {
      h.expect(result).to.match(/MY_INCREDIBLE_FUNCTION/);
    });
  });

  it('should debug() return return_data option', function () {
    var _data = {
      name: 'MY_INCREDIBLE_FUNCTION',
      arguments: arguments,
      line: {original_line: 9},
      return_data: 1
    };

    var __return__ = debugPrint.debug(_data, 'NAME2', function (result) {
      h.expect(result).to.match(/MY_INCREDIBLE_FUNCTION/);
    });

    h.expect(__return__).to.equal(1);
  });

});
