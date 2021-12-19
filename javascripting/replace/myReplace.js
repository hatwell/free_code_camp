Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

Object.defineProperty(String.prototype, "downcase", {
  value: function () {
    return this.charAt(0).toLowerCase() + this.slice(1);
  },
  enumerable: false,
});

Object.defineProperty(String.prototype, "isCapitalized", {
  value: function () {
    return this[0].toUpperCase() == this[0];
  },
});

const myReplace = (str, before, after) => {
  if (before.isCapitalized()) {
    after = after.capitalize();
  } else {
    after = after.downcase();
  }

  return str.replace(before, after);
};

module.exports = { myReplace };
