// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  var max = Number.MIN_VALUE;
  var secondHighest = max;
  for (i = 0; i < array.length; i++) {
    if (array[i] > max) {
      secondHighest = max;
      max = array[i];
    }
    if (array[i] > second_highest && array[i] < max) {
      secondHighest = array[i];
    }
  }
  return secondHighest;
}

