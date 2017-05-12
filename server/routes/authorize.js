const express = require('express');
const app = express();
const authorizeHandler = require('../handlers/authorizeHandler.js');


app.get('/', authorizeHandler);

module.exports = app;
