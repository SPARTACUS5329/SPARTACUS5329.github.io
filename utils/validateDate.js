const monthMap = require("../utils/calendar");

module.exports = (date) => {
  // Validator to check format dd/mm/yyyy
  let length = date.length;
  if (length != 10) {
    return false;
  }
  let dd = Number(date[0] + date[1]);
  let mm = Number(date[3] + date[4]);
  let yyyy = Number(date[6] + date[7] + date[8] + date[9]);
  if (mm < 1 || mm > 12) {
    return false;
  }

  if (dd < 1 || date > monthMap[mm]) {
    return false;
  }

  if (yyyy < 1) {
    return false;
  }

  let leapYear;
  if (yyyy % 4) {
    leapYear = false;
  } else if (yyyy % 400 && !yyyy % 100) {
    leapYear = false;
  } else {
    leapYear = true;
  }
  if (leapYear && mm == 2 && dd > 29) {
    return false;
  }
  if (!leapYear && mm == 2 && dd > 28) {
    return false;
  }
  return true;
};
