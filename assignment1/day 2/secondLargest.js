// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
    // Write your code here
    var max = Number.MIN_VALUE;
    var second_highest = max;
    for (i = 0; i < array.length; i++) {
        if (array[i] > max) {
            second_highest = max;
            max = array[i];
        }

        if (array[i] > second_highest && array[i] < max) {
            second_highest = array[i];
        }

    }
    return second_highest;
}
