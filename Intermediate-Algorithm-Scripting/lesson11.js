//lesson 11 HTML
function convertHTML(str) {
  // &colon;&rpar;
  let htmlCharatcers = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str
    .split("")
    .map(function(char) {
      return htmlCharatcers[char] || char;
    })
    .join("");
}

convertHTML("Dolce & Gabbana");
