const driver = {
  driverLicense: "B",
  licenseIssued: new Date().getFullYear() - 10, // 10 years old license
  numberOfAccident: 0,
  bonus: 0.9,
};

// Write a function canRentACar:
// * Input: a driver
// * Output: a boolean if the driver can rent a car
let thisGuyCanRentACar;

function canRentACar(driver) {
  //Check license
  if (driver.driverLicense === "B" || driver.driverLicense === "B1") {
    if (driver.licenseIssued <= new Date().getFullYear() - 2) {
      if (driver.numberOfAccident === 0 || driver.bonus >= 0.7) {
        thisGuyCanRentACar = true;
      }
    } else {
      thisGuyCanRentACar = false;
    }
  } else {
    thisGuyCanRentACar = false;
  }
  return thisGuyCanRentACar;
}
canRentACar(driver);

// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = canRentACar
/*
//Check license
if (driver.driverLicense === "B" || driver.driverLicense === "B1") {
  thisGuyCanRentACar = true;
}
//Check licenceYear
if (driver.licenseIssued <= 2015) {
  thisGuyCanRentACar = true;
}
//Check AccidentCount
if (driver.numberOfAccident === 0) {
  thisGuyCanRentACar = true;
}
//Check bonus
if (driver.bonus >= 0.7) {
  thisGuyCanRentACar = true;
}
return thisGuyCanRentACar;
licenseIssued: new Date().getFullYear() - 10, // 10 years old license
*/
