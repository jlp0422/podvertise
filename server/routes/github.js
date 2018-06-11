const app = require('express').Router();
module.exports = app;

const { User } = require('../db').models
const passport = require('passport')
const GithubStrategy = require('passport-github').Strategy
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, HOST } = process.env

passport.use(
  new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: `${HOST}/auth/github/callback`
  },

  function(access, refresh, profile, done) {
    console.log('profile: ', profile)
    User.findOrCreate({
      where: { githubId: profile.id}
    })
    .spread((user, created) => {
      console.log('user: ', user)
      done(null, user)
    })
    .catch(done)
  }
))

app.use('/', passport.authenticate('github', { scope: 'email', session: false }))

app.use('/callback', passport.authenticate('github', { session: false }), (req, res) => {
  res.redirect('/')
})
