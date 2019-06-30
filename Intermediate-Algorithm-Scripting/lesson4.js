//Lesson 4 Wherefore art thou
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var Keyword = Object.keys(source);
  
    return collection.filter(function (obj) {
      return Keyword.every(function (word) {
        return obj.hasOwnProperty(word) && obj[word] === source[word];
      });
    });
  
  
    
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });