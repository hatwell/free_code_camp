const { fibonacci, sumFibs } = require("./sumFibs");

describe("sumfibs", () => {
  it("should sum the fibs", () => {
    expect(typeof sumFibs(1)).toBe("number");
  });

  it("should sum the fibs", () => {
    expect(sumFibs(1000)).toBe(1785);
  });

  xit("should sum the fibs", () => {
    expect(sumFibs(4000000)).toBe(4613732);
  });

  it("should sum the fibs", () => {
    expect(sumFibs(4)).toBe(5);
  });

  xit("should sum the fibs", () => {
    expect(sumFibs(75024)).toBe(60696);
  });

  xit("should sum the fibs", () => {
    expect(sumFibs(75025)).toBe(135721);
  });
});

describe("fibonacci", () => {
  it("should get the fibos", () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(6)).toBe(8);
  });
});
