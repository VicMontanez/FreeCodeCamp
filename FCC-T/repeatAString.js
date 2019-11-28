// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  // repeat after me

  var strFull = "";
  if (num < 0) {
    return "";
  }
  for (var i = 0; i < num; i++) {
    strFull = str.concat(strFull);
  }
  return strFull;
}

repeatStringNumTimes("abc", 3);

//25 min 40sec
