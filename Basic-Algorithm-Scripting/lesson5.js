function largestOfFour(arr) {
  // You can do this!
  let largeArray = [];
  for (let i = 0; i < arr.length; i++) {
    largeArray[i] = arr[i].sort((a, b) => b -a)[0]
  }
  return largeArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);