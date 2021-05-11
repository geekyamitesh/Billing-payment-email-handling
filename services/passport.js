const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/key');




passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googlClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refresToken, profile, done) => {
      console.log("accessToken", accessToken);
      console.log("refresToken", refresToken);
      console.log("profile", profile);
    }
  )
);
