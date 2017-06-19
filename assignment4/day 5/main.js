const secondLargestModule = require("./files/secondLargest");
const calculateFrequencyModule = require("./files/calculateFrequency");
const flattenObjectModule = require("./files/flatten");
const unflattenObjectModule = require("./files/unflatten");
var output;

function calculateOutput(inputs, logic) {
  for (let i = 0; i < inputs.length; i++) {
    output = logic(inputs[i]);
    showInputOutput(inputs[i], output);
  }
}

function showInputOutput(input, output) {
  console.log("input :", input, "\noutput :", output);
}

//task 1 : second largest calculation.
calculateOutput([
  [3, 56, 7, 32, 9, 14],
  [21, 87, 91, 31, 97, 59, 8, 83, 27, 23, 76, 72, 31, 91, 65, 77, 84, 27, 56, 59],
  [21, 87, 91, 31, 97, 59, 8, 83, 27, 23, 76, 72, 31, 91, 65, 77, 84, 92, 56, 59]
], secondLargestModule.secondLargest);

//task 2 : frequency of character in a word that contains only lowercase english alphabet.
calculateOutput(["dummy", "dummy text", "shali is running fast", "shali is running fast", "u@#d$fkj$#!kds"],
  calculateFrequencyModule.calculateFrequency);

//task 3 : convert a unflattern object into flatten object. 
calculateOutput([{
  "flatJSON": false,
  "i": {
    "am": {
      "not": {
        "so": {
          "flat": true,
          "unflat": false
        }
      },
      "a": "tree"
    }
  },
  "dates": [{
    "day": 1
  }, {
    "day": 8947
  }]
}], flattenObjectModule.flatten);

//task 4 : convert a flattern object into unflatten object. 
calculateOutput([{
  "flatJSON": false,
  "i.am.not.so.flat": true,
  "i.am.not.so.unflat": false,
  "i.am.a": "tree",
  "dates.0.day": 1,
  "dates.1.day": 8947
}], unflattenObjectModule.unflatten);
