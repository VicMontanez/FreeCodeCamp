//Lesson14
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    var newArr = arr.concat(num)
    
   var arr2 = newArr.sort((a, b) => a - b).indexOf(num)
    return arr2;
  }
  
  getIndexToIns([40, 60], 50);