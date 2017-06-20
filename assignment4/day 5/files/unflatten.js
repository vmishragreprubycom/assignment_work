function unflatten(flatObject) {
  var output = {};
  for (var key in flatObject) {
    makeUnflatten(output, key.split('.'), flatObject[key]);
  }
  return output;
}

function makeUnflatten(output, parts, value) {
  var lastKeyIndex = parts.length - 1;
  for (var i = 0; i < lastKeyIndex; ++i) {
    var key = parts[i];
    if (!(key in output)) {
      output[key] = /^\d+$/.test(parts[i + 1]) ? [] : {};
    }
    output = output[key];
  }
  output[parts[lastKeyIndex]] = value;
}

module.exports.unflatten = unflatten;
