module.exports.calculateFrequency = function(string) {
  output = [];
  for (i = 0; i < string.length; i++) {
    var currentCharacter=string.charAt(i);
    if (currentCharacter.charCodeAt(0) > 96 && currentCharacter.charCodeAt(0) < 123) {
      if (output[currentCharacter]) {
        output[currentCharacter]++;
      } else {
        output[currentCharacter] = 1;
      }
    }
  }
  return output;
}
