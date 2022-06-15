const User = require("../models/User");
const minDate = require("../utils/minDate");
const validateDate = require("../utils/validateDate");

module.exports = (app) => {
  app.post("/birthday", async (req, response) => {
    try {
      const { username, birthday } = req.query;
      if (!validateDate(birthday)) {
        throw Error("Inavlid date");
      }
      const user = await User.create({ username, birthday });
      response.send({ username, birthday }).status(200);
    } catch (error) {
      console.error(error.message);
      response.send({ error: error.message }).status(500);
    }
  });

  app.get("/closest-birthday", async (req, response) => {
    try {
      const { date } = req.query;
      if (!validateDate(date)) {
        throw Error("Inavlid date");
      }
      const userList = await User.find({});

      const { closestDate, days } = minDate(userList, date);
      response.send({ date, closestDate, days }).status(200);
    } catch (error) {
      console.error(error.message);
      response.send({ error: error.message }).status(500);
    }
  });

  app.get("/birthday", async (req, response) => {
    try {
      const { username } = req.query;
      const user = await User.findOne({ username });
      if (!user) {
        throw Error("This user does not exist");
      }
      response.send({ username, birthday: user.birthday }).status(200);
    } catch (error) {
      console.error(error.message);
      response.send({ error: error.message }).status(500);
    }
  });

  app.patch("/birthday", async (req, response) => {
    try {
      const { username, newDate } = req.query;
      if (!validateDate(newDate)) {
        throw Error("Inavlid date");
      }
      const user = await User.findOneAndUpdate(
        { username },
        { $set: { birthday: newDate } }
      );
      if (!user) {
        throw Error("This user does not exist");
      }
      response.send({ user }).status(200);
    } catch (error) {
      console.error(error.message);
      response.send({ error: error.message }).status(500);
    }
  });

  app.delete("/birthday", async (req, response) => {
    try {
      const { username, birthday } = req.query;
      if (!validateDate(birthday)) {
        throw Error("Inavlid date");
      }
      const user = await User.findOne({ username });
      if (!user) {
        throw Error("This user does not exist");
      }
      if (user.birthday != birthday) {
        throw Error("Correct birthday not sent");
      }
      await User.deleteOne(user);
      response.send({ username, birthday }).status(200);
    } catch (error) {
      console.error(error.message);
      response.send({ error: error.message }).status(500);
    }
  });
};
