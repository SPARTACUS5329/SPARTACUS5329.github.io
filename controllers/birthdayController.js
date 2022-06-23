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
      response.status(200);
      response.send({ username, birthday });
    } catch (error) {
      console.error(error.message);
      response.status(500);
      response.send({ error: error.message });
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
      response.status(200);
      response.send({ date, closestDate, days });
    } catch (error) {
      console.error(error.message);
      response.status(500);
      response.send({ error: error.message });
    }
  });

  app.get("/birthday", async (req, response) => {
    try {
      const { username } = req.query;
      const user = await User.findOne({ username });
      if (!user) {
        throw Error("This user does not exist");
      }
      response.status(200);
      response.send({ username, birthday: user.birthday });
    } catch (error) {
      console.error(error.message);
      response.status(500);
      response.send({ error: error.message });
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
      response.status(200);
      response.send({ user });
    } catch (error) {
      console.error(error.message);
      response.status(500);
      response.send({ error: error.message });
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
      response.status(200);
      response.send({ username, birthday });
    } catch (error) {
      console.error(error.message);
      response.status(500);
      response.send({ error: error.message });
    }
  });
};
