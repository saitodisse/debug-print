var util = require('util');

module.exports = function(debug, obj) {
  if (!process.env.DEBUG) {
    return;
  }

  var depth_env = parseInt(process.env.DEPTH) || null;

  var arguments_string = '';
  for (var i = 0; i < obj.arguments.length; i++) {
    arguments_string += util.inspect(obj.arguments[i],
      { showHidden:false, colors:true, depth: depth_env });
    if (i !== obj.arguments.length - 1) {
      arguments_string += ', ';
    }
  }

  var final_log = [
    '',
    '    ' + obj.line.original_line + ' | ' + obj.name + ' (' + arguments_string + ')',
    '      |   returned: ' + util.inspect(obj.return_data,
      { showHidden:false, colors:true, depth: depth_env }),
    '      |   time elapsed:',
  ].join('\n');

  debug(final_log);

  console.log('');
};
