const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/key');
const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googlClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refresToken, profile, done) => {

// to check new googleid is exist in db or not
     User.findOne({googleId: profile.id})
      .then ((existingUser) => {
            if(existingUser){
              //we already have a record with given profileId      
            }else {
              //we don't have a newuser in db
              new User ({
                googleId: profile.id
              }).save();
            }
      })
     
    }
  )
);
