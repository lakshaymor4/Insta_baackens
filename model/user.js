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
    type: String,
    required: true,
  },
  profile: {
    type: String,
    default:
      "https://ik.imagekit.io/lakshay/default_profile.jpg?updatedAt=1704866851198",
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
