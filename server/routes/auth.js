const app = require('express').Router()
module.exports = app;

const { User } = require('../db').models
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(
  new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: `${process.env.HOST}/auth/google/callback`
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

app.get('/google', passport.authenticate('google', { scope: 'email', session: false }))

app.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  res.redirect('/')
})
