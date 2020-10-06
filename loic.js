const anagrams = (word1, word2) => {
  //Get rid of spaces
  let w1 = word1.split(" ").join("");
  let w2 = word2.split(" ").join("");

  //Get rid of capital letters
  w1 = w1.toLowerCase();
  w2 = w2.toLowerCase();

  //w1 and w2 must have the same length
  if (w1.length !== w2.length) {
    return false;
  }

  //For every character in w1, I'll "scratch" it in w2. If I don't find it, the answer is false
  const w2Array = w2.split("");
  for (let i = 0; i < w1.length; i++) {
    const foundAt = w2Array.findIndex((elt) => {
      return elt === w1[i];
    });
    if (foundAt === -1) {
      return false;
    }
    w2Array.splice(foundAt, 1);
  }
  return true;
};
console.log(true, anagrams("toto", "toto"));
console.log(false, anagrams("toto", "tot"));
console.log(true, anagrams("to  to", "t oto"));
