function repeatStringNumTimes(str, num) {
    // repeat after me
    var newString = ''
  
    while (num > 0) {
      newString += str;
      num --
    }
  
    return newString;
  }
  
  repeatStringNumTimes("abc", 3);