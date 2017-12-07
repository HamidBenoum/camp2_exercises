const greeting = require("./greeting");


describe("a block of tests", function() {
  test("Say Hello to variable name", function() {
    expect(greeting("Hamid")).toBe("Hello HAMID!");
  });

  test("Say Hello to variable name is empty", function() {
    expect(greeting()).toBe("Hello WORLD!");
  });
});
