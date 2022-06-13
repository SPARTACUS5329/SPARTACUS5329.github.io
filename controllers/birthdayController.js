const moment = require("moment");
moment().format();
const dateToDays = require("../utils/dateToDays");

module.exports = (app) => {
  app.post("/add-birthday", (req, response) => {
    const { username, birthday } = req.query;
    console.log(username, birthday);
    response.send({ username, birthday }).status(200);
  });

  app.get("/closest-birthday", (req, response) => {
    let { date } = req.query;
    const dateArray = [
      "02/12/1923",
      "05/08/2023",
      "03/07/2023",
      "17/12/1931",
      "17/12/1931",
      "01/01/2102",
    ];

    // let dateObj = moment(date, "YYYY-MM-DD");
    const days = dateToDays(date);
    let min = 365;
    let temp;
    let difference;
    let minDate;
    dateArray.forEach((date) => {
      temp = dateToDays(date);
      difference = Math.min(Math.abs(temp - days), Math.abs(temp - days + 365));
      if (difference < min) {
        min = difference;
        minDate = date;
      }
    });
    response.send({ date, minDate, days: dateToDays(minDate) }).status(200);
  });

  app.get("/birthday", (req, response) => {});

  app.put("/birthday", (req, response) => {});

  app.delete("/birthday", (req, response) => {});
};
