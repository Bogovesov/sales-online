const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const clietRouter = require('./clientRouter');
const companyRouter = require('./companyRouter');
const orderRouter = require('./orderRouter');
const productRouter = require('./productRouter');
const contracttRouter = require('./contractRouter');
const quoteRouter  = require('./blog/quoteRouter');

router.use('/user', userRouter);
router.use('/client', clietRouter);
router.use('/company', companyRouter);
router.use('/order', orderRouter);
router.use('/product', productRouter);
router.use('/contract', contracttRouter);
router.use('/quotes', quoteRouter);

module.exports = router;