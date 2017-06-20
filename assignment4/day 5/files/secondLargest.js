function secondLargest(array) {
  var max = Number.MIN_VALUE;
  var secondHighest = max;
  for (i = 0; i < array.length; i++) {
    if (array[i] > max) {
      secondHighest = max;
      max = array[i];
    }
    if (array[i] > secondHighest && array[i] < max) {
      secondHighest = array[i];
    }
  }
  return secondHighest;
}

module.exports.secondLargest = secondLargest;
