//Lesson 12 Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  Array.prototype.last = function() {
    return this[this.length - 1];
  };
  Array.prototype.secondToLast = function() {
    return this[this.length - 2];
  };
  var newArr = [1, 1];

  while (newArr.secondToLast() + newArr.last() <= num) {
    newArr.push(newArr.secondToLast() + newArr.last());
  }
  return newArr
    .filter(function(num) {
      return num % 2 !== 0;
    })
    .reduce(function(a, b) {
      return a + b;
    });
}

sumFibs(4);
