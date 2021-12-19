const { myReplace } = require("./myReplace");

describe("my replace", () => {
  it("should lower case replace", () => {
    expect(myReplace("Let us go to the store", "store", "mall")).toBe(
      "Let us go to the mall"
    );
  });
  it("replace sitting", () => {
    expect(
      myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
    ).toBe("He is Sitting on the couch");
  });
  it("replace after is upcased", () => {
    expect(myReplace("I think we should look up there", "up", "Down")).toBe(
      "I think we should look down there"
    );
  });
  it("replace spelling error", () => {
    expect(myReplace("This has a spellngi error", "spellngi", "spelling")).toBe(
      "This has a spelling error"
    );
  });
  it("replace replate with lower", () => {
    expect(myReplace("His name is Tom", "Tom", "john")).toBe(
      "His name is John"
    );
  });
  it("replace coding", () => {
    expect(
      myReplace("Let us get back to more Coding", "Coding", "algorithms")
    ).toBe("Let us get back to more Algorithms");
  });
});
