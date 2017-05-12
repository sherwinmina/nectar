const express = require('express');
const app = express();
const catchAllHandler = require('../handlers/catchAllHandler.js');


app.use('/', catchAllHandler);

module.exports = app;
