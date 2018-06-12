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
  console.log(profile)
  const [ firstName, lastName ] = profile.displayName.split(' ')
  const email = profile.emails[0].value || ''
  User.findOrCreate({
    where: { githubId: profile.id },
    defaults: {
      firstName,
      lastName,
      email
    }
  })
  .spread((user, created) => done(null, user))
  .catch(done)
}

passport.use(new GitHubStrategy(githubCreds, verificationCallback))

app.get('/', passport.authenticate('github', { session: false }))

app.get('/callback', passport.authenticate('github', { session: false }), (req, res) => {
  res.redirect('/')
})
