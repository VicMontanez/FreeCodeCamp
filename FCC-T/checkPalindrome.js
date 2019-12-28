//Check Palindrome
function checkPalindrome(inputString) {
  var sentence = inputString;
  var backwards = "";

  for (var i = 0; i < sentence.length; i++) {
    backwards = inputString
      .split("")
      .reverse()
      .join("");
  }
  if (backwards === sentence) {
    console.log(`Words are palindrome!`);
    return true;
  } else {
    console.log(`Words are NOT palindrome!`);
    return false;
  }
}

checkPalindrome("aabaa");
checkPalindrome("abac");
checkPalindrome("a");

//50 min 27 sec
