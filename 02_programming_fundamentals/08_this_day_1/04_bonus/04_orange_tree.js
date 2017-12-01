// See Sparta courses for the exercise summary


const orangeTree = {
  height: 0, //(in cm)
  age: 0,//(in year)
  oranges: 0,
  alive: true,

  pickAnOrange: function(){
    if (this.oranges > 0){
      this.oranges = this.oranges - 1;
      return true;
    } else {
      return false;
    }
  },
  ageOneYear: function() {
    this.age = this.age + 1;

    //taille
    if (this.age < 10 ) {
      this.height = this.height + 25;
    } else if (this.age >= 10 && this.age < 20 ) {
      this.height = this.height + 10;
    }

    //production oranges
    if (this.age >= 5 && this.age < 10) {
      this.oranges = 10;
    } else if (this.age >= 10 && this.age < 20) {
      this.oranges = 20;
    } else if (this.age >= 20 && this.age < 40) {
      this.oranges = 5;
    } else if (this.age < 5 || this.age >= 40) {
      this.oranges = 0;
    }
    //durée de vie.
    let endOflife = Math.floor((150 - (this.age + 50)) * Math.random() + this.age);

    console.log(`Age de l'arbre : ${endOflife} ans`);
    console.log(`Poucentage de mort ${((endOflife - 50 ) / 50)*100} %`);
    console.log(`valeur age ${this.age}`);
    if (this.age > 50  || this.age > 100 ) {
      this.alive = false;
      console.log("testAlive");
    } else if (this.age >= endOflife || this.age > 100) {
      this.alive = true;
    }
    console.log(this.alive);
    return this;
  },
  seed: function() {
    this.height =  0; //(in cm)
    this.age = 0;//(in year)
    this.oranges = 0;
    this.alive = true;
  },

}

orangeTree.ageOneYear();
module.exports = orangeTree;
