const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')))
app.use('/vendor', express.static(path.join(__dirname, './src/public')))

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, './src/public/index.html')))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`port of call: ${port}`))
