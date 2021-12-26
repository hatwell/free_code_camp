const timestampRegex = new RegExp(/\d{10,15}/);

const isTimestamp = (string) => timestampRegex.test(string);

const isDateValid = (date) => new Date(parseInt(date)) == "Invalid Date";

const getCurrentDatetime = () => {
  const dateNow = new Date();
  return {
    utc: dateNow.getTime(),
    unix: dateNow.getTime(),
  };
};

const getDateAndEpoch = (date) => {
  const dateo = new Date(date);

  return {
    unix: dateo.getTime(),
    utc: dateo.toUTCString(),
  };
};

const getDateFromEpoch = (date) => {
  const epochDate = parseInt(date);
  return {
    unix: epochDate,
    utc: new Date(epochDate).toUTCString(),
  };
};

const handleDate = (date) => {
  if (!date) {
    return getCurrentDatetime();
  }
  if (!isDateValid(date)) {
    return { error: "Invalid Date" };
  }
  if (isTimestamp(date.toString())) {
    return getDateFromEpoch(date);
  } else {
    return getDateAndEpoch(date);
  }
};

module.exports = { handleDate, isTimestamp };
