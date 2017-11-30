// See Sparta courses for the exercise summary

const car = {
  speed : 0,
  drivingTime: 0,
  drivenDistance:0,


  start : function () {
    // reset all car data
    this.speed = 0;
    this.drivingTime = 0;
    this.drivenDistance = 0;
    return this;
  },
  changeSpeed : function (speed) {
    // change the km/h speed of the car
    this.speed = speed;
    return this;
  },
  drive : function (minutes) {
    //make your car drive at the previously set speed for that amount of time in minutes
    //save data in drivingDistance
    this.drivingTime = minutes;
    this.drivenDistance = this.drivenDistance + (this.speed * this.drivingTime) / 60;
    return this;
  },
  showDistance: function() {
    //print the distance you drove as the number of kilometers
    console.log(`${this.drivenDistance} Km`);
    return `${this.drivenDistance} Km`;
  }
}

//car.start().changeSpeed(130).drive(42).showDistance();
car
  .start()
  .changeSpeed(130).drive(45)
  .changeSpeed(50).drive(30)
  .changeSpeed(90).drive(80)
  .showDistance();






module.exports = car;
