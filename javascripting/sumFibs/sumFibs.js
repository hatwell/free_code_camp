const isOdd = (n) => !(n % 2 === 0);

const sumFibs = (n) => {
  return getFibs(n)
    .filter(isOdd)
    .reduce((a, b) => a + b, 0);
};

const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  let previous = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    let new_current = previous + current;
    previous = current;
    current = new_current;
  }

  return current;
};

const getFibs = (limit) => {
  const fibs = [];
  const range = [...Array(limit).keys()].map((n) => n + 1);

  range.forEach((num) => {
    const fibo = fibonacci(num);

    if (fibo > limit) {
      return;
    } else {
      fibs.push(fibo);
    }
  });

  return fibs;
};

module.exports = { fibonacci, sumFibs };
