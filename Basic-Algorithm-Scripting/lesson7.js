//Lesson 7  Repeat a String Repeat a String
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
