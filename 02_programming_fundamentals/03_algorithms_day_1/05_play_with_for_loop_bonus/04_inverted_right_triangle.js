// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```
//let stdout = "*****";
let stdout = [];

let i, j = 5;

for (i = j-1; i >= 0; i --) {
  stdout[i] = new Array(j - i).join("") + new Array(i + 2).join("*");
  //stdout[4] = new Array(5 - 5).join(" ") + new Array(4 + 2).join("*"); ==> *****
  //stdout[3] = new Array(5 - 4).join(" ") + new Array(3 + 2).join("*"); ==> [] + ****
  //stdout[2] = new Array(5 - 3).join(" ") + new Array(2 + 2).join("*"); ==> [][] + ***
  //stdout[1] = new Array(5 - 2).join(" ") + new Array(1 + 2).join("*"); ==> [][][] + **
  //stdout[0] = new Array(5 - 1).join(" ") + new Array(0 + 2).join("*"); ==> [][][][] + *


  console.log(stdout[i]);
}
