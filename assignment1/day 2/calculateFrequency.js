// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  var output = [];
  var array = Array.from(string);
  for (i = 0; i < array.length; i++) {
    if (array[i].charCodeAt(0) > 96 && array[i].charCodeAt(0) < 123) {
      if (output[array[i]]) {
        output[array[i]]++;
      } else {
        output[array[i]] = 1;
      }
    }
  }
  return output;
}
