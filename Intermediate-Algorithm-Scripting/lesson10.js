//Lesson 10
function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  var newArr = [];

  args
    .reduce(function(a, b) {
      return a.concat(b);
    })
    .forEach(function(item) {
      if (newArr.indexOf(item) < 0) {
        newArr.push(item);
      }
    });

  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
