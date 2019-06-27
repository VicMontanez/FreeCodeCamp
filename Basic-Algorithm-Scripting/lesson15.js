//Lesson 15  Mutations
function mutation(arr) {
    var arr3 = arr[1].toLowerCase();
    var newArray = arr[0].toLowerCase();
    for (var i=0;i<arr3.length;i++) {
      if (newArray.indexOf(arr3[i]) < 0)
        return false;
    }
    return true;
   }
  
  
  mutation(["hello", "hey"]);