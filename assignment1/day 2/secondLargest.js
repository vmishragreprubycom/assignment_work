// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function calculateFrequency(string) {
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
