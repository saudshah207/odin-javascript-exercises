const repeatString = function (string, timesToRepeat) {
  let repeatedString = (timesToRepeat > -1) ? "" : "ERROR";
  while (timesToRepeat > 0) {
    repeatedString += string;
    timesToRepeat--;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
