const app = require('express').Router()
module.exports = app;

const { User } = require('../db').models
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, HOST } = process.env

passport.use(
  new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${HOST}/auth/google/callback`
  },

  function(access, refresh, profile, done) {
    User.findOrCreate({
      where: { googleId: profile.id },
      defaults: {
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
      }
    })
    .spread((user, created) => {
      done(null, user)
    })
    .catch(done)
  }
))

app.get('/', passport.authenticate('google', { scope: 'email', session: false }))

app.get('/callback', passport.authenticate('google', { session: false }), (req, res) => {
  res.redirect('/')
})
