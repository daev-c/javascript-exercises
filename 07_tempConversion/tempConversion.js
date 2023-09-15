const convertToCelsius = function(far) {
  let cels, fiveNinths = 5 / 9;

  cels = (far - 32 ) * fiveNinths;

  cels = Math.round(cels * 10) / 10;

  return cels;
};

const convertToFahrenheit = function(cels) {
  let far, nineFifths = 9 / 5;

  far = (cels * nineFifths) + 32;

  far = Math.round(far * 10) / 10;

  return far;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
