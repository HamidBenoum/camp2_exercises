const orangeTree = require("./03_orange_tree");
beforeEach(()=> {
  orangeTree.seed();
})


describe("orange_tree", function() {
  test("orangeTree should contains", function() {
    expect(orangeTree.age).toEqual(0);
    expect(orangeTree.alive).toEqual(true);
    expect(orangeTree.height).toEqual(0);
    expect(orangeTree.oranges).toEqual(0);
  });
});

test("orangeTree contains oranges", function() {
  orangeTree.oranges = 1;
  orangeTree.pickAnOrange();
  expect(orangeTree.oranges).toEqual(0);
});

test("You should'nt pick oranges if there is no oranges", function() {
  orangeTree.oranges = 0;
  //orangeTree.pickAnOrange();
  expect(orangeTree.pickAnOrange()).toEqual(false);
});

test("Seed should reset all orangeTree params", function(){
  expect(orangeTree.alive).toEqual(true);
  expect(orangeTree.height).toEqual(0);
  expect(orangeTree.age).toEqual(0);
  expect(orangeTree.oranges).toEqual(0);
});

test("Tree should die between 50 and 100 years", function(){

  while(orangeTree.alive && orangeTree.age < 100) {
    orangeTree.ageOneYear();
  }
  expect(orangeTree.alive).toEqual(false);
  expect(orangeTree.age > 50).toEqual(true);
  expect(orangeTree.age < 100).toEqual(true);
});

test("Tree should age 1 year", function(){
  let testThisAge = 0;
  for ( let i = 1; i < 20; i++ ) {
    testThisAge = i;
    orangeTree.ageOneYear();
    expect(orangeTree.age).toEqual(testThisAge);
  }
});

test("the tree must grow by 25 cm each year from 0 to 10 ", function(){

  for( let i = 0; i < 9; i++) {
    orangeTree.ageOneYear();
  }
  console.log(`0 to 10 =>  ${orangeTree.height}`);
  expect(orangeTree.height).toBe(225);
});

test("the tree must grow by 10 cm each year from 10 to 20 ", function(){

  for( let i = 10; i < 19; i++) {
    orangeTree.ageOneYear();
  }
  console.log(`10 to 20 =>  ${orangeTree.height}`);
  expect(orangeTree.height).toBe(315);
});

//test production oranges.
test("Oranges production test before 5 years and after 40 yeas ", function(){

  orangeTree.seed();
  while (orangeTree.age <= 5 || orangeTree.age > 40 ) {
    orangeTree.ageOneYear();
  }
  expect(orangeTree.oranges).toBe(0);
});

test("Oranges production test between 5 years and 10 yeas ", function(){

  orangeTree.seed();
  while (orangeTree.age >= 5 || orangeTree.age < 10 ) {
    orangeTree.ageOneYear();
  }
  expect(orangeTree.oranges).toBe(45);
});

test("Oranges production test between 10 years and 20 yeas ", function(){

  orangeTree.seed();
  while (orangeTree.age >= 10 || orangeTree.age < 20 ) {
    orangeTree.ageOneYear();
  }
  expect(orangeTree.oranges).toBe(380);
});

test("Oranges production test between 20 years and 40 yeas ", function(){

  orangeTree.seed();
  while (orangeTree.age >= 20 || orangeTree.age < 40 ) {
    orangeTree.ageOneYear();
  }
  expect(orangeTree.oranges).toBe(95);
});
/*
test("___", function(){
  expect(orangeTree.XXX()).toEqual();
});
*/
