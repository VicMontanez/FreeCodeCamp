//lesson 5
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
  var spaces = /\s+|_+/g;
  var newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2')
  
    return newStr.replace(spaces, '-').toLowerCase()
  }
  
  spinalCase('This Is Spinal Tap');