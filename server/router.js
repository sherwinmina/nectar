const router = require('express').Router();
const authRouter = require('./routes/authenticate.js');

router.use('/login', authRouter);

module.exports = router;
