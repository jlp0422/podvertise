const app = require('express').Router()
module.exports = app;

app.use('/apply', require('./apply'))
app.use('/auth', require('./auth'))
