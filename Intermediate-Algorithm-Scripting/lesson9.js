//Lesson 9 Missing Letters
function fearNotLetter(str) {
  // split the str and create new array of character's numerical value
  let numberVal = str.split("").map(function(letter) {
    return letter.charCodeAt();
  });
  for (let i = 0; i < numberVal.length; i++) {
    if (numberVal[i + 1] - numberVal[i] > 1) {
      return String.fromCharCode(numberVal[i] + 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");
