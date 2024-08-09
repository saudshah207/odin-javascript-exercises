const convertToCelsius = function(fahrenheit) {
  let celsiusTemp = +((fahrenheit - 32) * 5/9).toFixed(1);
  return celsiusTemp;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheitTemp = +(celsius * 9/5 + 32).toFixed(1);
  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
