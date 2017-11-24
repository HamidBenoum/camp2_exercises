// ## A Rectangle of 10 by 10
//
// ```
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// ```

const maLigne = [];


for (let i = 0; i < 10; i++) {
  maLigne.push("*");
}
//console.log(maLigne);
let ligne = maLigne.join("");

for (let i = 0; i < 10; i++) {
  console.log(ligne);
}
