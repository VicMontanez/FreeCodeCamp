//Lesson 11 Title case a sentence
function titleCase(str) {
  return;
  str.toLowerCase().replace(/(^|\s)\S/g, words => words.toUpperCase());
}

titleCase("I'm a little tea pot");
