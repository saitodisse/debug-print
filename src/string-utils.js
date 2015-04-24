var S = require('string');

module.exports = {
  padRightWithDotsIfBigger: function (name, size) {
    var name_size = name.length;

    if (size >= 0) {
      if (name_size > size) {
        name = '..' + S(name).right(size - 2).s;
        return S(name).padRight(size - 2).s;
      }
    } else {
      // FIXME: DEBUG=* DEBUG_STYLE=1 DEBUG_SUBJECT_RIGHT=50 DEBUG_FUNCTION_PAD_RIGHT=-10 node _sandbox/file1.js
      if (name_size > (size * -1)) {
        name = S(name).right(size - 2).s + '..';
      }
      return S(name).padRight((size * -1) - 2).s;
    }

    return S(name).padRight(size).s;

  }
};
