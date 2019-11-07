//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var regex = /\s|_/g;
  var lowerCase = str.toLowerCase();
  var newStr = lowerCase.replace(regex, "-");
  console.log(newStr);
}

spinalCase("AllThe-small Things");
