var secondLargestModule = require("./files/secondLargest");
var calculateFrequencyModule = require("./files/calculateFrequency");
var flattenObjectModule = require("./files/flatten");
var unflattenObjectModule = require("./files/unflatten");
var output;

function secondLargest() {
  var inputs = [[3,56,7,32,9,14],[21, 87, 91, 31, 97, 59, 8, 83, 27, 23, 76, 72, 31, 91, 65, 77, 84, 27, 56, 59],[21, 87, 91, 31, 97, 59, 8, 83, 27, 23, 76, 72, 31, 91, 65, 77, 84, 92, 56, 59]];
  for (var i = 0; i < inputs.length; i++) {
	output = secondLargestModule.secondLargest(inputs[i]);
	showInputOutput(inputs[i],output);
  }
}

function frequencyCalculation() {
  var inputs = ["dummy","dummy text","shali is running fast","shali is running fast","u@#d$fkj$#!kds"];
  for (var i = 0; i < inputs.length; i++) {
    output = calculateFrequencyModule.calculateFrequency(inputs[i]);
	showInputOutput(inputs[i],output);
  }
}

function flattenObject() {
  var input = { "flatJSON": false, "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, "dates": [ { "day": 1 }, { "day": 8947 } ] };
  output = flattenObjectModule.flatten(input);
  showInputOutput(input,output);
}

function unflattenObject() {
  var input = { "flatJSON": false, "i.am.not.so.flat": true, "i.am.not.so.unflat": false, "i.am.a": "tree", "dates.0.day": 1, "dates.1.day": 8947 };
  output = unflattenObjectModule.unflatten(input);
  showInputOutput(input,output);
}

function showInputOutput(input, output) {
  console.log("input :",input,"\noutput :",output);
}
//task1
secondLargest();
//task2 
frequencyCalculation();
//task3
flattenObject();
//task4
unflattenObject();
