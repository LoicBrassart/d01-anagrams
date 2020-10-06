// meme taille
// meme lettres

const anagram = (word1, word2) => {
  // No more spaces
  let w1 = word1.split(" ").join("");
  let w2 = word2.split(" ").join("");

  // No more caps letters
  w1 = w1.toLowerCase();
  w2 = w2.toLowerCase();

  //Test tailles identiques
  if (w1.length !== w2.length) {
    return false;
  }

  w2 = w2.split("");
  for (let i = 0; i < w1.length; i++) {
    const letter = w1[i];
    const foundAt = w2.indexOf(letter);

    if (foundAt === -1) {
      return false;
    }

    w2.splice(foundAt, 1);
  }

  return true;
};

/*
console.log(true === anagram("", ""));
console.log(true === anagram("table", "table"));
console.log(true === anagram("TABLE", "table"));
console.log(true === anagram("ta                         ble", "table"));
console.log(true === anagram("table", "blate"));
console.log(false === anagram("eeeee", "blate"));
console.log(false === anagram("table", ""));
*/
module.exports = anagram;
