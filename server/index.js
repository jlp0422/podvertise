/* eslint-disable */
require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const db = require('./db')
const passport = require('passport')

app.use(require('body-parser').json())
app.use(require('body-parser').urlencoded({ extended: true }))

app.use('/dist', express.static(path.join(__dirname, '../dist')))
app.use('/vendor', express.static(path.join(__dirname, '../node_modules')))
app.use('/vendor', express.static(path.join(__dirname, './../src/public')))

app.use('/', require('./routes'))

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, './../src/public/index.html')))

db.sync()

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`port of call: ${port}`))
