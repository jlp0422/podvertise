/* eslint-disable */
const app = require('express').Router();
const nodemailer = require('nodemailer');
module.exports = app;

app.post('/apply', (req, res, next) => {
  console.log(req.body)
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false,
      auth: {
        user: 'apikey',
        pass: process.env.MAIL_KEY
      }
    });

    let helper = {
      to: 'jeremyphilipson@gmail.com',
      from: 'Podvertise <podvertise@gmail.com>',
      subject: 'Testing',
      html: `<div>Hello</div>`
    }

    transporter.sendMail(helper, (error, info) => {
      if (error) return console.log(error)
    })

    res.sendStatus(200)
  })

})
