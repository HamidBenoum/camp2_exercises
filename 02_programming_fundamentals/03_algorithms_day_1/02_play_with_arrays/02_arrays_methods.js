/*
 ## Use some methods
 */

// Rewrite your array `digits` using `push`;


// rewrite your variable `last` using `length`;


// create another array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;


// use `join` to create, into the variable `allDigits`, a string like this : `zero - one ...`.
//const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const digits = [];

/*
//2. Play with arrays
const first = digits[0];
console.log(first);

const last = digits[9];
console.log(last);

const sixt = digits[6];
console.log(sixt);
*/
for (let i = 0; i < 10; i ++){
  digits.push(i);
}
console.log(digits);

const last = digits.length -1;
console.log(last);

const litteralDigits = ['zero', 'one', 'two', 'tree', 'four', 'five', 'six', 'height', 'nine'];

const allDigits = litteralDigits.join('-');
console.log(allDigits);
