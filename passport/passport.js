const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  function (email, password, done) {

    console.log("passport.js > passed!");
    db.User.findOne({
      where: { email: email }
    })
      .then((dbUser) => {

        console.log("passport.js 'dbUser': ", dbUser);
        if (!dbUser) return done(null, false, { message: 'Incorrect username.' });
        if (!dbUser.validPassword(password)) return done(null, false, { message: 'Incorrect password.' });

        // If login successful, return user info
        return done(null, {
          id: dbUser.id,
          name: dbUser.name,
          email: dbUser.email,
          occupation: dbUser.occupation,
          relationshipType: dbUser.relationshipType,
          location: dbUser.location,
          imageUrl: dbUser.imageUrl,
          bio: dbUser.bio
        });

      });
  }));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

module.exports = passport;