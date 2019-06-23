//Lesson 13 Falsy Bouncer
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var bounceArr = arr.filter(Boolean)
    return bounceArr;
  }
  
  bouncer([7, "ate", "", false, 9]);