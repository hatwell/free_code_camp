const orbitalPeriod = (arr) => {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const [{ avgAlt }] = arr;
  const semiMajorAxis = earthRadius + avgAlt;

  return 2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3));
};

describe(" orbital period", () => {
  expect(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }])).toBe([
    { name: "sputnik", orbitalPeriod: 86400 },
  ]);

  expect(
    orbitalPeriod([
      { name: "iss", avgAlt: 413.6 },
      { name: "hubble", avgAlt: 556.7 },
      { name: "moon", avgAlt: 378632.553 },
    ])
  ).toBe([
    { name: "iss", orbitalPeriod: 5557 },
    { name: "hubble", orbitalPeriod: 5734 },
    { name: "moon", orbitalPeriod: 2377399 },
  ]);
});
