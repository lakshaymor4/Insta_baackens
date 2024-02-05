const User = require("../model/user");
const otp = require("../model/otp");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Register = async (req, res) => {
  console.log(req.body);
  const user = req.body;

  // Use await or .exec() to get the result from the query
  const email_find = await otp.findOne({ email: user.email }).exec();

  if (email_find && email_find.otp == user.otp) {
    user.password = await bcrypt.hash(req.body.password, 10);

    const dbUser = new User({
      username: user.username,
      email: user.email,
      mobile: user.mobile,
      password: user.password,
      fullname: user.fullname,
      dateofbirth: user.birth,
    });

    // Use await to ensure the user is saved before sending the response
    await dbUser.save();
    const payload = {
      username: user.username,
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 86400 },
      (err, token) => {
        if (err) return res.json({ message: err });
        return res.json({
          message: "Success",
          token: "Bearer " + token,
        });
      }
    );
  } else {
    res.json({ message: "Wrong OTP", isOtpCorrect: false });
  }
};

module.exports = Register;
