const convertToCelsius = function(Fahrenheit) {
  /*
  Temperature in degrees Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32.
   Temperature in degrees Celsius (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9.
   */
  return (Fahrenheit-32)*(5/9);
};

const convertToFahrenheit = function(Celsius) {
  return (Celsius*(9/5))+32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
