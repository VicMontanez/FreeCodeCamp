function titleCase(str) {
  var lowCase = str.toLowerCase().split(" ");
  console.log(lowCase);
  for (var i = 0; i < lowCase.length; i++) {
    lowCase[i] = lowCase[i][0].toUpperCase() + lowCase[i].slice(1);
    console.log(lowCase);
  }

  return lowCase.join(" ");
}

titleCase("I'm a little tea pot");
