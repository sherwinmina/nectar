const router = require('express').Router();
const userRouter = require('./routes/userRouter.js');
const postRouter = require('./routes/postRouter.js');
const productsRouter = require('./routes/productsRouter.js');


// router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/posts', postRouter);
router.use('/products', productsRouter);

module.exports = router;
