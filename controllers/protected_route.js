const vrify = require("../server/verifyjwt");
const user = require("../model/user");

const pr = async (req, res) => {
  user.findOne({ username: req.user.username }).then((dbUser) => {
    console.log(dbUser);
    res.json({
      isLoggedIn: true,
      username: req.user.username,
      profile_pic: dbUser.profile,
      fullname: dbUser.fullname,
    });
  });
};
module.exports = pr;
