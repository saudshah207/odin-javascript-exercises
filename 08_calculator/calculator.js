const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (numbers) {
  const sum = numbers.reduce((sum, currentNumber) => sum += currentNumber, 0);

  return sum;
};

const multiply = function (numbers) {
  const product = numbers.reduce(
    (product, currentNumber) => product * currentNumber,
    1
  );

  return product;
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (number) {
  let factorial = 1;

  if (number === 0) return factorial;

  for (; number > 1; number--) factorial *= number;

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
