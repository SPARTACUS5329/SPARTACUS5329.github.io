const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.port || 5000;
const dbURL = process.env.dbURL;

const app = express();
app.use(express.json());
app.use("*", (req, response) => {
  response.status(404).json({ error: "not found" });
});

mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connected to userDatabase");
    app.listen(PORT);
    console.log(`Listening to port ${PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });
