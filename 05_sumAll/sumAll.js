const sumAll = function (firstNum, lastNum) {
  if (
    firstNum > -1 &&
    lastNum > -1 &&
    Number.isInteger(firstNum) &&
    Number.isInteger(lastNum)
  ) {
    let sum = 0;
    if (firstNum > lastNum) {
      [firstNum, lastNum] = [lastNum, firstNum];
    }
    while (lastNum >= firstNum) {
      sum += lastNum;
      lastNum--;
    }
    return sum;
  } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
