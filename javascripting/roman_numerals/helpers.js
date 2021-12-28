const powersOfTen = (number) =>
  number
    .toString()
    .split("")
    .map((n) => parseInt(n));

const powers = {
  units: ["I", "V", "X"],
  tens: ["X", "L", "C"],
  hundreds: ["C", "D", "M"],
  thousands: ["M", "MMMMM" * 5, "M" * 10],
};

const makeMap = (power) => {
  const [one, five, ten] = power;
  return {
    1: `${one}`,
    2: `${one}${one}`,
    3: `${one}${one}${one}`,
    4: `${one}${five}`,
    5: `${five}`,
    6: `${five}${one}`,
    7: `${five}${one}${one}`,
    8: `${five}${one}${one}${one}`,
    9: `${one}${ten}`,
    0: "",
    undefined: "",
  };
};

const numberMaps = [
  makeMap(powers.units),
  makeMap(powers.tens),
  makeMap(powers.hundreds),
  makeMap(powers.thousands),
];

module.exports = { numberMaps, powers, powersOfTen };
