function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

  //Iterate through arr1
  for (let i = 0; i < arr1.length; i++) {
    //Check if Element is in arr2
    if (arr2.indexOf(arr1[i]) == -1) {
       //Store the element in newArr
      newArr.push(arr1[i])
    }
  }

  //Iterate through arr2
  for (let i =0; i < arr2.length; i++) {
  //Check if the element is in arr1
  if (arr1.indexOf(arr2[i]) == -1) {
  //Store the element in newArr
    newArr.push(arr2[i])
   }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);