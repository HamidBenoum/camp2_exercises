// Write a function `joinArray` and implement it using `reduce`:
// * Input: an array AND a string separator
// * Output: a string with each elements separated by the `separator`
//
// eg: join(["zero", "one", "two"], "-") => "zero - one - two"


const list = ["zero", "one", "two"];


function joinArray (array, str) {
  const result = array.reduce((accumulator, currentValue) => accumulator + str + currentValue);
  return result;
}

joinArray(list,"-");




// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = joinArray;
