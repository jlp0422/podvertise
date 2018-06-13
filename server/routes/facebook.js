const app = require('express').Router()
module.exports = app;

const { User } = require('../db').models
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const { FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET, HOST } = process.env

passport.use( new FacebookStrategy(
  {
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: `${HOST}/auth/facebook/callback`
  },
  function(access, refresh, profile, done) {
    console.log(profile)
    User.findOrCreate({
      where: { facebookId: profile.id }
    })
    .spread((user, created) => done(null, user))
    .catch(done)
  }
))

app.get('/', passport.authenticate('facebook', { scope: ['email', 'public_profile'], session: false }))

// callback is a little messed up, but works
app.get('/callback', passport.authenticate('facebook', { /* failureRedirect: '/login', */ session: false }), (req, res) => {
  res.redirect('/')
})
