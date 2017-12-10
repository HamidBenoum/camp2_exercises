// # The sea with some whirlpools (30 by 9)
// And to spice things up, add an X at the positions 25:2
//and 7:9 and a 0 at the positions 6:4 and 18:7
//
// ```
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~X~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~0~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~0~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~X~~~~~~~~~~~~~~~~~~~~~~~
// ```


//const waves = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
const ocean = [];

for (let i = 0; i < 30; i ++) {
  ocean.push("~");
}

//position 25 = indice 24 

for (let i = 1; i <= 9; i++) {
  if (i === 2) {
    ocean[24] = "X";
    console.log(ocean.join(""));
    ocean[24] = "~";
  } else if (i === 4) {
    ocean[5] = "0";
    console.log(ocean.join(""));
    ocean[5] = "~";
  } else if (i === 9) {
    ocean[6] = "X";
    console.log(ocean.join(""));
    ocean[6] = "~";
  } else if (i === 7) {
    ocean[17] = "0";
    console.log(ocean.join(""));
    ocean[17] = "~";
  } else {
    console.log(ocean.join(""));
  }
}
