const app = require('express').Router();
module.exports = app;

const { User } = require('../db').models
const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy;
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, HOST } = process.env

const githubCreds = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: `${HOST}/auth/github/callback`
}

const verificationCallback = (accessToken, refreshToken, profile, done) => {
  console.log('*** access token: ', accessToken)
  console.log('*** refresh token: ', refreshToken)
  User.findOrCreate({
    where: { githubId: profile.id },
    defaults: {
      firstname: profile.displayName.split(' ')[0],
      lastname: profile.displayName.split(' ')[1],
      email: profile.emails[0].value,
    }
  })
  .spread((user, created) => done(null, user))
  .catch(done)
}

passport.use(new GitHubStrategy(githubCreds, verificationCallback))

app.use('/', passport.authenticate('github', { session: false }))

app.use('/callback', passport.authenticate('github', { failureRedirect: '/contact', session: false }), (req, res) => {
  console.log('call back user: ', req.user)
  res.redirect('/')
})
