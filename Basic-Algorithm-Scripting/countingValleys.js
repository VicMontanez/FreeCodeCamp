"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
  var currentLevel = 0;
  var prevLevel = 0;
  var valleyCount = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "U") {
      currentLevel++;
    } else {
      currentLevel--;
    }

    if (currentLevel === 0 && s[i] === "U") {
      valleyCount++;
    }
  }
  console.log(valleyCount);
  return valleyCount;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const s = readLine();

  let result = countingValleys(n, s);

  ws.write(result + "\n");

  ws.end();
}
