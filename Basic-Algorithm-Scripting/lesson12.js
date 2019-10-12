//Lesson 12 Slice and Splice
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  var newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);

  console.log(arr2);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Secondary Solution //
// function frankenSplice(arr1, arr2, n) {

//   var newArray = arr2.slice(0);

//   for (var i =0; i < arr1.length; i++) {

//       newArray.splice(n,0,arr1[i])
//       n += 1
//   }

//   return newArray;
// }

// frankenSplice([1, 2, 3], [4, 5, 6], 1);
