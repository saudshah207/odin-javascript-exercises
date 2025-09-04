const fibonacci = function (n) {
  // our fibonacci sequence starts at 1, 1, 2, 3, 5,....
  let secondPreceding = 1,
    firstPreceding = secondPreceding,
    nthFibonacci = 1;

  n = +n;

  if (n < 0) return "OOPS";

  if (n === 0) return 0;

  // F(n) = F(n - 1) + F(n - 2);
  while (n > 2) {
    secondPreceding = firstPreceding;
    firstPreceding = nthFibonacci;

    nthFibonacci = firstPreceding + secondPreceding;

    n--;
  }

  return nthFibonacci;
};

// Do not edit below this line
module.exports = fibonacci;
