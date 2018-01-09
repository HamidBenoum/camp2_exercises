// Insert code here
const Algae = 0;

class Fish {
  constructor (name, sex, type) {
    this.name = name;
    this.sex = sex;
    this.type = type;
  }
}


class Aquarium {
  constructor(fishes, algaes) {
    this.fishes = fishes;
    this.algae = algae;
  }
  addFish(newFish){
    console.log(newFish);
    this.fishes.push(newFish);
  }
  addAlgae(item){
    this.algaes = item;
    console.log(this.algaes);
  }
  randomize(){
    const ramdomIndex = Math.floor(Math.random() * Math.floor(this.fishes.length));
    return ramdomIndex;
  }

  passTime(){


  }
  displayAquarium(newAquarium) {
    //console.log(`nb poissons : ${this.fishes.length}`);
    //const result = this.fishes.map(item => `name: ${item.name} - sex: ${item.sex}`);
    //console.log(result.join(" \n"));
    //console.log(`nb algae : ${this.nbAlgae}`);
    return newAquarium;
  }
}


function fillAquarium() {
  const newAquarium = new Aquarium([],[]);
  const newFish = new Fish("Robert","male", "vegan");
  newAquarium.addFish(newFish);

  // newAquarium.addFish("Albert","male", "carnivore");
  // newAquarium.addFish("Bernarde","Femelle", "carnivore");
  // newAquarium.addFish("Georgette","Femelle", "vegan");
  // newAquarium.addFish("Bernard","Male", "Vegan");
  const newAlgae = new Aquarium.algae(3);

  newAquarium.addAlgae(newAlgae);


  newAquarium.displayAquarium(newAquarium);
}


fillAquarium();

module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
