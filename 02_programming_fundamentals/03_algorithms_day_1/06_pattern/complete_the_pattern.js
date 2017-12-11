// Modify this value to test with other values
const numberOfLine = 4;
// Your code here ⬇

function pattern(numberOfLine) {
  let myArray = [];
  if (numberOfLine > 0) {
    myArray = (Array.from(Array(numberOfLine + 1).keys())).reverse();
    for (let i = numberOfLine; i > 0; i--) {
      myArray.pop();
      console.log(myArray.join(""));
    }
  } else {
    return myArray;
  }
}

pattern(numberOfLine);
