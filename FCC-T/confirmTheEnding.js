//Confirm the Ending
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Congratulation", "on");

//19 min 23 sec
