const app = require('express').Router()
module.exports = app;

app.use('/apply', require('./apply'))
app.use('/auth/google', require('./google'))
app.use('/auth/github', require('./github'))
