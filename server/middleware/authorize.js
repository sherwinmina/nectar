const expressJWT = require('express-jwt');
const express = require('express');
const app = express();
const secret = require('../../jwtConfigVars.json').secret || process.env.JWT_SECRET;


app.use(expressJWT({
  secret,
  credentialsRequired: false
}));

module.exports = app;
