const whatIsInAName = (array, object) => {
  const keys = Object.keys(object);
  const result = [];
  array.forEach((obj) => {
    const keys = Object.keys(object);
    if (keys.every((key) => obj[key] == object[key])) {
      result.push(obj);
    }
  });
  return result;
};

module.exports = { whatIsInAName };
