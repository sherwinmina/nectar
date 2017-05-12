const router = require('express').Router();
const authenticateRouter = require('./routes/authenticate.js');
const authorizeRouter = require('./routes/authorize.js');
const catchAllRouter = require('./routes/catchAll.js');

router.use('/login', authenticateRouter);

router.use('/authorize', authorizeRouter);

router.use('*', catchAllRouter);

module.exports = router;
