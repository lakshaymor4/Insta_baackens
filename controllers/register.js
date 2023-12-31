const User = require("../model/user");
const bcrypt = require("bcrypt");
const Register = async (req, res) => {
  const user = req.body;
  const takenUsername = await User.findOne({ username: user.username });
  if (takenUsername) {
    res.json({ message: "Username already taken" });
  } else {
    user.password = await bcrypt.hash(req.body.password, 10);

    const dbUser = new User({
      username: user.username,
      email: user.email,
      mobile: user.mobile,
      password: user.password,
      fullname: user.fullname,
      dateofbirth: user.birth,
    });
    dbUser.save();
    res.json({ message: "Success" });
  }
};
module.exports = Register;
