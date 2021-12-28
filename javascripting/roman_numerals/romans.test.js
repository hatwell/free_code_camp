const { convertToRoman } = require("./romans");

describe("convertToRoman", () => {
  it("2", () => {
    expect(convertToRoman(2)).toBe("II");
  });

  it("3", () => {
    expect(convertToRoman(3)).toBe("III");
  });

  it("4", () => {
    expect(convertToRoman(4)).toBe("IV");
  });

  it("5", () => {
    expect(convertToRoman(5)).toBe("V");
  });

  it("9", () => {
    expect(convertToRoman(9)).toBe("IX");
  });

  it("12", () => {
    expect(convertToRoman(12)).toBe("XII");
  });

  it("16", () => {
    expect(convertToRoman(16)).toBe("XVI");
  });

  it("29", () => {
    expect(convertToRoman(29)).toBe("XXIX");
  });

  it("44", () => {
    expect(convertToRoman(44)).toBe("XLIV");
  });

  it("45", () => {
    expect(convertToRoman(45)).toBe("XLV");
  });

  it("68", () => {
    expect(convertToRoman(68)).toBe("LXVIII");
  });

  xit("83", () => {
    expect(convertToRoman(83)).toBe("LXXXIII");
  });

  xit("97", () => {
    expect(convertToRoman(97)).toBe("XCVII");
  });

  xit("99", () => {
    expect(convertToRoman(99)).toBe("XCIX");
  });

  xit("400", () => {
    expect(convertToRoman(400)).toBe("CD");
  });

  xit("500", () => {
    expect(convertToRoman(500)).toBe("D");
  });

  xit("501", () => {
    expect(convertToRoman(501)).toBe("DI");
  });

  it("649", () => {
    expect(convertToRoman(649)).toBe("DCXLIX");
  });

  it("798", () => {
    expect(convertToRoman(798)).toBe("DCCXCVIII");
  });

  it("891", () => {
    expect(convertToRoman(891)).toBe("DCCCXCI");
  });

  it("1000", () => {
    expect(convertToRoman(1000)).toBe("M");
  });

  it("1004", () => {
    expect(convertToRoman(1004)).toBe("MIV");
  });

  it("1006", () => {
    expect(convertToRoman(1006)).toBe("MVI");
  });

  it("1023", () => {
    expect(convertToRoman(1023)).toBe("MXXIII");
  });

  it("2014", () => {
    expect(convertToRoman(2014)).toBe("MMXIV");
  });

  it("3999", () => {
    expect(convertToRoman(3999)).toBe("MMMCMXCIX");
  });
});
describe("convertFromRoman", () => {});
