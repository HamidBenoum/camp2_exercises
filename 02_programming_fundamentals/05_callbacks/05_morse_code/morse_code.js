// Your task is to implement a function decodeMorse(morseCode), that would take the morse code as input and return a decoded human-readable string.
//
// For example:
//
// decodeMorse(".... . -.--   .--- ..- -.. .") === "HEY JUDE";

// Here is the array of each letter in morse code
const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9"
};

// decodeMorse(".... . -.--   .--- ..- -.. .")

let sentence = ".... . -.--   .--- ..- -.. .";

function decodeMorse(morse) {
  //on split code(sentence) en array avec coomme séparateur 3 espaces.
  const mySentenceinArray = morse.split("   ");

  /*on retourne mySentenceinArray avec deux elements, puis envoie le tout à la fonction
  wordCheck
  */
  return mySentenceinArray
    .map((word) => wordCheck(word))
    .join(" ");
}

function wordCheck(word) {
  //on split Word en array avec coomme séparateur 1 espace.
  const myWordInArray = word.split(" ");

  /*on retourne myWordInArray avec deux elements, puis envoie le tout à la fonction
  letterDiscovery
  */
  return myWordInArray
    .map((letter) => letterDiscovery(letter))
    .join("");
}

function letterDiscovery(letter) {
  // on fait correspondre les lettre au équivalent de l'objet Morse_code.
  return MORSE_CODE[letter];
}


//phrase = phrase.toLowerCase().replace(/[^a-z]/g, "");
//c = phrase.charCodeAt(i);


// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = decodeMorse;
