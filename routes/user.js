const express = require("express");
const router = express.Router();
const Register = require("../controllers/register");
const Login = require("../controllers/login");
const verifyJWT = require("../server/verifyjwt");
router.post("/signup", Register);
router.post("/login", Login);
router.get("/get", verifyJWT, (req, res) => {
  res.json({ isLoggedIn: true, username: req.user.username });
});
module.exports = router;
