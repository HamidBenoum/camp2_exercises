// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]
const list = [1, 2, 3, 4, 5];

function filter(array, str) {
  const filteredList = [];

  if (str === "even") {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        filteredList.push(array[i]);
      }
    }
  } else if (str === "odd") {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        filteredList.push(array[i]);
      }
    }
  }

  return filteredList;
}

const result = filter([-1, -2, -3, -4, -5], "toto");
console.log(result);




// do not remove this line, it is for tests
module.exports = filter;
