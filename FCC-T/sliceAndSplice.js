//Slice and Splice
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  var newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);

  console.log(arr2);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
