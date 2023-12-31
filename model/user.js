const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: Number,
    required: true,
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
