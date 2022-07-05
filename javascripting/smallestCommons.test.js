const getMax = (nums) => {
  if (nums?.length !== 2) { throw new Error('array must contain only two values'); }
  const [one, two] = nums;
  if (one > two) {
    return [two, one];
  }
  return [one, two];
};

const primeFactors = (number) => {
  let n = number;
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    } else {
      divisor += 1;
    }
  }
  return factors;
};

const getRange = (start, stop) => Array.from(
  new Array((stop - start) + 1),
  (_, i) => i + start,
);
const smallestCommons = (boundaries) => {
  const minMax = getMax(boundaries);
  const rangeFactorial = getRange(minMax[0], minMax[1]).reduce((a, b) => a * b);
  return primeFactors(rangeFactorial).reduce((a, b) => a * b);
};

describe('smallest Commons', () => {
  it('smallestCommons([5, 1]) should return 60', () => {
    expect(smallestCommons([5, 1])).toEqual(60);
  });
  it('smallestCommons([2, 10]) should return 2520', () => {
    expect(smallestCommons([2, 10])).toEqual(2520);
  });
  it('smallestCommons([1, 13]) should return 360360', () => {
    expect(smallestCommons([1, 13])).toEqual(360360);
  });
  it('smallestCommons([23, 18]) should return 6056820', () => {
    expect(smallestCommons([23, 18])).toEqual(6056820);
  });

  describe('get Max', () => {
    it('gets max of two numbers', () => {
      expect(getMax([0, 100])).toEqual([0, 100]);
    });

    it('throws error if array not correct size', () => {
      expect(getMax).toThrow(Error('array must contain only two values'));
    });

    it('returns max of two numbers same', () => {
      expect(getMax([100, 100])).toEqual([100, 100]);
    });
  });

  describe('make range', () => {
    it('small range', () => {
      expect(getRange(1, 3)).toEqual([1, 2, 3]);
    });
    it('bigger range', () => {
      expect(getRange(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });
});
