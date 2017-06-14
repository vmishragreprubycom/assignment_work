// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    // Write your code here
    var output = [];
    // var a=string.split('');
    var array = Array.from(string);
    //console.log(array);
    for (i = 0; i < array.length; i++) {
        if (array[i].charCodeAt(0) > 96 && array[i].charCodeAt(0) < 123) {

            if (output[array[i]]) {
                output[array[i]]++;
            } else {
                output[array[i]] = 1;
            }
        }
    }
    //console.log(output);
    return output;
}
