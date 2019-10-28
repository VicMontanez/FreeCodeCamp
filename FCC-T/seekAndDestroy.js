// 3. Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// Note
// You have to use the arguments object.

function destroyer(arr) {
  // Remove all the values
  var items = Array.from(arguments);
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (items.includes(arr[i]) == false) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//arr.filter(args.indexOf(arr) === -1);
//const result = words.filter(word => word.length > 6)

//20 min 12 sec
