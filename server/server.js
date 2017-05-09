const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const middleware = require('./middleware/');
const router = require('./router.js');


app.use(bodyParser.json(), middleware, router);

app.listen(3000, () => {
  console.log('nectar listening on port 3000');
});
