//Sum All Numbers in a Range
function sumAll(arr) {
  arr.sort(function(a,b){return a - b})
  //Find the maximum and the minimum of numbers in arr
console.log(arr)
  //Find the numbers in between the two numbers in the arr
var result = 0;
for(var i=arr[0]; i<=arr[1]; i++) {
  result += i
}


  //Add all of the numbers together including the two numbers in the arr
  return result
  
 
}

sumAll([10, 4]);