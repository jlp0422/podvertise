/* eslint-disable */
const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');

app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')))
app.use('/vendor', express.static(path.join(__dirname, './src/public')))

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, './src/public/index.html')))

app.post('/apply', (req, res, next) => {
  console.log(req.body.info)
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      // service: 'gmail',
      host: 'smtp.ethereal.email',
      secure: false,
      port: 587,
      auth: {
        user: account.user,
        pass: account.pass
      },
      // tls: { rejectUnauthorized: false }
    });

    let helper = {
      from: 'Podvertise <podvertise@gmail.com>',
      to: 'jeremyphilipson@gmail.com',
      subject: 'Testing',
      html: `<div>Hello</div>`
    }

    transporter.sendMail(helper, (error, info) => {
      if (error) return console.log(error)
      console.log('*** INFO ***', info)
      console.log('Message sent: %s', info.messageId);
    })

    res.sendStatus(200)
  })

})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`port of call: ${port}`))
