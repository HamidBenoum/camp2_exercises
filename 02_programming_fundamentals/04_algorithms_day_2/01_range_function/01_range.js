// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.




function range(parameter1, parameter2) {
let myArray = [];


  if (parameter1 < parameter2) {
    // cas ascendant
    for (let i = parameter1; i <= parameter2; i++) {
      myArray.push(i);
    }
  } else {
    for (let i = parameter1; i >= parameter2; i--) {
      myArray.push(i);
    }
  }
  return myArray;
}

range(4,1);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
