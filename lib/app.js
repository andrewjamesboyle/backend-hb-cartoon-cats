const express = require('express');

const app = express();

app.use('/', require('./controllers/cats'));

module.exports = app;
