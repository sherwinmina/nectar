const express = require('express');
const app = express();
const authenticateHandler = require('../handlers/authenticateHandler.js');


app.post('/', authenticateHandler);

module.exports = app;
