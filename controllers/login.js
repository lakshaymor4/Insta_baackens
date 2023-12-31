const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const Login = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const number = req.body.mobile;
  console.log(req.body);
  if (username) {
    User.findOne({ username: username }).then((dbUser) => {
      if (!dbUser) {
        return res.json({
          message: "Invalid Username or Password",
        });
      }
      bcrypt.compare(req.body.password, dbUser.password).then((isCorrect) => {
        if (isCorrect) {
          const payload = {
            id: dbUser._id,
            username: dbUser.username,
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
          return res.json({
            message: "Invalid Username or Password",
          });
        }
      });
    });
  } else if (email) {
    User.findOne({ email: email }).then((dbUser) => {
      if (!dbUser) {
        return res.json({
          message: "Invalid email or Password",
        });
      }
      bcrypt.compare(req.body.password, dbUser.password).then((isCorrect) => {
        if (isCorrect) {
          const payload = {
            id: dbUser._id,
            username: dbUser.email,
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
          return res.json({
            message: "Invalid email or Password",
          });
        }
      });
    });
  } else if (number) {
    User.findOne({ mobile: number }).then((dbUser) => {
      if (!dbUser) {
        return res.json({
          message: "Invalid number or Password",
        });
      }
      bcrypt.compare(req.body.password, dbUser.password).then((isCorrect) => {
        if (isCorrect) {
          const payload = {
            id: dbUser._id,
            username: dbUser.mobile,
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
          return res.json({
            message: "Invalid number or Password",
          });
        }
      });
    });
  }
};

module.exports = Login;
