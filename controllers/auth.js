const db = require("../models");
const passport = require("../passport/passport");
const router = require("express").Router();

//---------------------------------------------//
//------------ User Routes (/auth) ------------//
//---------------------------------------------//

// Get Logged On User Info
router.get("/getuser", (req, res) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null })
  }
});

// Log On User
router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("/auth/login passed");
  res.json({ user: req.user });
});

// Log Out User
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Create New User
router.post("/signup", (req, res) => {
  console.log("/signup 'req.body'", req.body);
  db.User.create(req.body)
    .then((results) => {
      res.json("/login");
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

module.exports = router;