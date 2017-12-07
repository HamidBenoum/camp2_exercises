const to_words = require("./to_words");


describe("to_words", function() {
  test("Sentence should return an array", function() {
    expect(to_words("Il fait beau")).toEqual([ "Il", "fait", "beau" ]);
  });

  test("Sentence should return an empty array", function() {
    expect(to_words("")).toEqual([]);
  });

  test("Sentence should return a block if there is no space", function() {
    expect(to_words("ilfaitbeau")).toEqual([ "ilfaitbeau" ]);
  });

  test("Sentence should handle symboles(, ; .)", function() {
    expect(to_words("il ;fait .beau, aujourd'hui")).toEqual([ "il", "fait", "beau", "aujourd'hui" ]);
  });
});
