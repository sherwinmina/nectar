const router = require('express').Router();
const userRouter = require('./routes/userRouter.js');


// router.use('/auth', authRouter);
router.use('/user', userRouter);
// router.use('/posts', postsRouter);

module.exports = router;
