const { keyToMatch, whatIsInAName } = require("./wherefore");

describe("wherefore art thou", () => {
  it("should pass the test big", () => {
    expect(
      whatIsInAName(
        [
          { first: "Romeo", last: "Montague" },
          { first: "Mercutio", last: null },
          { first: "Tybalt", last: "Capulet" },
        ],
        { last: "Capulet" }
      )
    ).toEqual([{ first: "Tybalt", last: "Capulet" }]);
  });

  it("should pass the test different", () => {
    expect(
      whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
        apple: 1,
      })
    ).toEqual([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]);
  });

  it("should pass the test apples", () => {
    expect(
      whatIsInAName(
        [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
        { apple: 1, bat: 2 }
      )
    ).toEqual([
      { apple: 1, bat: 2 },
      { apple: 1, bat: 2, cookie: 2 },
    ]);
  });

  it("should pass the test more apples", () => {
    expect(
      whatIsInAName(
        [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
        { apple: 1, cookie: 2 }
      )
    ).toEqual([{ apple: 1, bat: 2, cookie: 2 }]);
  });

  it("should pass the test apples again", () => {
    expect(
      whatIsInAName(
        [
          { apple: 1, bat: 2 },
          { apple: 1 },
          { apple: 1, bat: 2, cookie: 2 },
          { bat: 2 },
        ],
        { apple: 1, bat: 2 }
      )
    ).toEqual([
      { apple: 1, bat: 2 },
      { apple: 1, bat: 2, cookie: 2 },
    ]);
  });

  it("should pass the test nothing", () => {
    expect(
      whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 })
    ).toEqual([]);
  });
});
