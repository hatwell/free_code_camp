const { numberMaps, powersOfTen } = require("./helpers");

const convertToRoman = (decimal) => {
  const powers = powersOfTen(decimal).reverse();

  const romanNumeral = powers.map((number, index) => {
    return numberMaps[index][number];
  });

  return romanNumeral.reverse().join("");
};

const convertFromRoman = (roman) => {};

module.exports = { convertFromRoman, convertToRoman };
