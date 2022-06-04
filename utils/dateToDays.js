const monthMap = require("./calendar");

const dateToDays = (date) => {
  // Date is in dd/mm/yyyy format
  const dd = parseInt(date[0] + date[1]);
  const mm = parseInt(date[3] + date[4]);
  const yyyy = parseInt(date[6] + date[7] + date[8] + date[9]);
  let days = 0;
  for (let i = 1; i < mm; i++) {
    days += monthMap[i];
  }
  days += dd;
  return days;
};

module.exports = dateToDays;
