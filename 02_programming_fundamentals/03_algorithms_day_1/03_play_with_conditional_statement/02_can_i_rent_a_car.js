// Do not pay attention to this line for the moment
const driverData = require("./.driver_data");

// These are the variables against which you should test
// driverLicense is a string with the kind of license (ex: AM, B, D...)
const driverLicense = driverData.driverLicense;
console.log(driverLicense);
// licenceIssued is an integer with the year it was issued (ex: 2001)
const licenceIssued = driverData.licenceIssued;
console.log(licenceIssued);
// numberOfAccident is an integer with the number of accidents.
const numberOfAccident = driverData.numberOfAccident;
console.log(numberOfAccident);
// bonus is a float that represent the driver's bonus
const bonus = driverData.bonus;
console.log(bonus);

// Assign a boolean to this variable:
//   `true` if the driver can rent a car
//   `false` if not
let canRentACar = false;

// Your code here:

/*
the driver has (at least) a B;
driver has been licensed for at least 2 years;
he must never have had any accidents or have re-achieved a bonus of 0.7.
*/
const myYearDate = (new Date()).getFullYear();
console.log(myYearDate);

if ((driverLicense === "B" || driverLicense === "B1")
     && (myYearDate - licenceIssued > 2)
     && (numberOfAccident === 0 || bonus >= 0.7)) {
         canRentACar = true;
  console.log(canRentACar);
} else {
  canRentACar = false;
  console.log(canRentACar);
}
