const express = require("express");
const router = express.Router();
const Register = require("../controllers/register");
const Login = require("../controllers/login");
const verifyJWT = require("../server/verifyjwt");
const protected = require("../controllers/protected_route");
const otp = require("../controllers/otp");
router.get("/", (req, res) => {
  res.send("Welcome to the user route");
});
router.post("/signup", Register);
router.post("/login", Login);
router.get("/", verifyJWT, protected);
router.post("/otp", otp);
module.exports = router;
