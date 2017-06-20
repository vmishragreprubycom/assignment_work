// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  output = [];
  for (i = 0; i < string.length; i++) {
    var currentCharacter = string.charAt(i);
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
