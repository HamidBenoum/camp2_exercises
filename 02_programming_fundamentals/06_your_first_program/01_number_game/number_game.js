const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//generation d'un nombre aléatoir ente 0 et 100.
function randomNumberBetween0and100(){
  return Math.floor(Math.random()*100);
}

function numberGame() {
  let hiddenValue = randomNumberBetween0and100();
  reader.question("devine un nombre : ", function(number){
    let userNumber = parseInt(number, 10);
    if (userNumber !== hiddenValue) {
      if(number > hiddenValue ){
        console.log("Too high");
      } else if (userNumber < hiddenValue) {
        console.log("Too low");
      }
      numberGame();
    }else {
      console.log("You won!");
      reader.close();
    }
  });
}

numberGame();
