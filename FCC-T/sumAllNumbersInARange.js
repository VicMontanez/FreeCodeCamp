// 1. Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function sumAll(arr) {
  var num = 0;
  arr.sort((a, b) => {
    return a - b;
  });

  for (var i = arr[0]; i <= arr[1]; i++) {
    num += i;
  }

  return num;
}
sumAll([1, 4]);
// 7 min 15 sec
