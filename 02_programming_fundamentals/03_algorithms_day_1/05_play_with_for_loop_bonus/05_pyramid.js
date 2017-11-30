// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```


let str = "*******";
let output="";
let myStr ="";

for (let i = str.length; i >= 0; i--) {
  if (i % 2 === 0) {
    myStr = " ".repeat((i - 1)/2 + 1);
    output = [str.slice(i, 0 ), myStr, str.slice(i - str.length)].join("");
    console.log(output);

  }

}
