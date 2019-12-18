//Hacker Rank - Compare The Triplets

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  var scores = [0, 0];
  for (var i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      scores[0]++;
    } else if (a[i] < b[i]) {
      scores[1]++;
    } else {
      scores[1] = scores[1];
    }
  }
  return scores;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(aTemp => parseInt(aTemp, 10));

  const b = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(bTemp => parseInt(bTemp, 10));

  const result = compareTriplets(a, b);

  ws.write(result.join(" ") + "\n");

  ws.end();
}

//50 min 19 secs
