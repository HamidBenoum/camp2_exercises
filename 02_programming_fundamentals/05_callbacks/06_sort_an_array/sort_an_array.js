// Your task is to create a function that will sort every number contained in a given array.
//
// For example:
//
// sort([24, 7, 9, 72, -8]) === [-8, 7, 9, 24, 72]
//
// Note: You should not use Array.sort()
//let smallest = unsortedArray.sort((a, b) => a > b);
//console.log(smallest);
//const smallest = Math.min.apply(null,unsortedArray);


function sort(unsortedArray) {
  const sortedArray = [];
  const tmpArray = unsortedArray;


  for (let i = 0; i < unsortedArray.length; i++) {
    const smallest = Math.min.apply(null, tmpArray);
    sortedArray.push(smallest);
    tmpArray.pop(smallest);
  }
  console.log(tmpArray);
  return sortedArray;
}
const result = sort([24, 7, 9, 72, -8]);
console.log(result);


// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = sort;
