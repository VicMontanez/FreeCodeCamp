//Confirm the Ending
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Congratulation", "on");
