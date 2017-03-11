const router = require('express').Router();
const productHandler = require('../handlers/productHandler.js');

router.route('/')
.get(productHandler.getAllProducts)
.post(productHandler.addProduct);

module.exports = router;
