const dateToDays = require("./dateToDays");

module.exports = (arr, date) => {
  const days = dateToDays(date);
  let min = 365;
  let temp;
  let difference;
  let minDate;
  arr.forEach((user) => {
    temp = dateToDays(user.birthday);
    difference = Math.min(Math.abs(temp - days), Math.abs(temp - days + 365));
    if (difference < min) {
      min = difference;
      minDate = user.birthday;
    }
  });
  return { closestDate: minDate, days: dateToDays(minDate) };
};
