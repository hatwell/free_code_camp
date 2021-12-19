const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetArray = alphabet.split("");

const fearNotLetter = (str) => {
  let missing;
  const index = alphabetArray.indexOf(str[0]);

  const letters = alphabetArray.slice(index, index + str.length);

  const stringLetters = str.split("");

  letters.forEach((letter) => {
    if (stringLetters.indexOf(letter) == -1) {
      missing = letter;
    }
  });
  return missing;
};

describe("missing letter", () => {
  it("should work when missing letter is b", () => {
    expect(fearNotLetter("acdefg")).toBe("b");
  });
  it("should work when missing letter is q", () => {
    expect(fearNotLetter("nopr")).toBe("q");
  });
  it("should work when missing letter is s", () => {
    expect(fearNotLetter("rtuv")).toBe("s");
  });
  it("should work when missing letter is b", () => {
    expect(fearNotLetter("abcdefh")).toBe("g");
  });
});
