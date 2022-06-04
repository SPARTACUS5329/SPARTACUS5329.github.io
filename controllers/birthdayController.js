const dateToDays = require("../utils/dateToDays");

module.exports = (app) => {
  app.get("/add-birthday", (req, response) => {
    const { username, birthday } = req.query;
    console.log(username, birthday);
    response.send({ username, birthday }).status(200);
  });

  app.get("/closest-birthday", (req, response) => {
    const { date } = req.query;
    const days = dateToDays(date);
    response.send({ days }).status(200);
  });
};
