const mongoose = require("mongoose");
const otp = require("../model/otp");
const otp_gen = require("otp-generator");
const nodemailer = require("nodemailer");

const Generate = (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSKEY,
    },
  });
  const token = otp_gen.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  otp.findOneAndDelete({ email: req.body.email });
  const Otp_save = new otp({
    email: req.body.email,
    otp: token,
  });

  Otp_save.save();
  var mailOptions = {
    from: "noreplyotp2@gmail.com",
    to: req.body.email,
    subject: "OTP for your registration",
    text: token,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      vt.save();
    }
  });
};

module.exports = Generate;
