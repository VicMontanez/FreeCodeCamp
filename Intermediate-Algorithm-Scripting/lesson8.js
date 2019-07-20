//Lesson 8 DNA Paring
function pairElement(str) {
  var pairs = { A: "T", T: "A", C: "G", G: "C" };

  //split string into array of characters
  var chars = str.split("");
  //map character to array of character and matching pair
  return chars.map(x => [x, pairs[x]]);
}

pairElement("GCG");
