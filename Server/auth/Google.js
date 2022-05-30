const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '59874154749-mn5f3gviik0iltvcts354acuj0gq4fjr.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET='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';

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/collback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));
passport.serializeUser(function(user, done) {
    done(null, user)
})
passport.deserializeUser(function(user, done) {
    done(null, user)
})
