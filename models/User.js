const mongoose = require("mongoose");
const validateDate = require("../utils/validateDate");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  birthday: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!validateDate(this.birthday)) {
    throw Error("Invalid birthday entered");
  }
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
