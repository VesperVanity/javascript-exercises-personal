const convertToCelsius = function(fahrenheit) 
{
  let celsius = 0;
  celsius = (fahrenheit - 32) * 5/9;
  let celsius_round = Math.round(celsius * 10) / 10;
  return celsius_round;
};

const convertToFahrenheit = function(celsius) 
{
  let fahrenheit = 0;
  fahrenheit = (celsius * 9/5) + 32;
  let fahrenheit_round = Math.round(fahrenheit * 10) / 10;
  return fahrenheit_round;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
