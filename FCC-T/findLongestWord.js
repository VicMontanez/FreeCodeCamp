// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  var words = str.split(" ");
  var wordLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > wordLength) {
      wordLength = words[i].length;
    }
  }

  return wordLength;
}

//28 min 
