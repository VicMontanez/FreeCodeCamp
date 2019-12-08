//Truncate a String

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  // Clear out that junk in your trunk
  return num < str.length ? str.substr(0, num) + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//40 min 37 sec
