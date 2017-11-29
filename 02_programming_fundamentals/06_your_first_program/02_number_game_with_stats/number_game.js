
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//generation d'un nombre aléatoir ente 0 et 100.
function randomNumberBetween0and100(){
  return Math.floor(Math.random()*100);
}
let hiddenValue = randomNumberBetween0and100();
console.log(hiddenValue);

let userTry = 0;
function numberGame() {


  reader.question("devine un nombre entre 0 et 100 : ", function(number){
    let userNumber = parseInt(number, 10);
    if (userNumber !== hiddenValue) {
      userTry++;
      if(userNumber > hiddenValue ){
        console.log("Too high");
      } else if (userNumber < hiddenValue) {
        console.log("Too low");
      }
      numberGame();
    } else {
      console.log(`You won ! after ${userTry} try. `);
      reader.close();
    }
  });
}

numberGame();
