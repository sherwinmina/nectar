const router = require('express').Router();
const userRouter = require('./routes/userRouter.js');
const postRouter = require('./routes/postRouter.js');


// router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/posts', postRouter);

module.exports = router;
