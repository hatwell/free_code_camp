const { powersOfTen } = require("./helpers");

describe("helpers", () => {
  it("should break up big number into powers of ten", () => {
    expect(powersOfTen(1234)).toEqual([1, 2, 3, 4]);
  });
  it("should break up small number into powers of ten", () => {
    expect(powersOfTen(2)).toEqual([2]);
  });
});
