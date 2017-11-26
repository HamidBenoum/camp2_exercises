const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


function fizzBuzz(list) {
  const fizzbuzzed = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 3 === 0 && list[i] % 5 === 0) {
      fizzbuzzed.push("FizzBuzz");
    } else if (list[i] % 3 === 0) {
      fizzbuzzed.push("Fizz");
    } else if (list[i] % 5 === 0) {
      fizzbuzzed.push("Buzz");
    } else {
      fizzbuzzed.push(list[i]);
    }
  }
  return fizzbuzzed;
}

const result = fizzBuzz(list);
console.log(result);


module.exports = fizzBuzz;
