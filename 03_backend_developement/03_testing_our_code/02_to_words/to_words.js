function toWords(sentence) {
  const allWords = sentence.split(/[.?!, :;]+/);
  console.log(allWords);
  return allWords.filter(word => word !== "");
}

toWords("il ;fait .beau, aujourd'hui");
module.exports = toWords;
