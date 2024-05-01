const express = require('express');
const routerUser = require('./user.router');
const routerCategory = require('./category.router');
const routerProduct = require('./product.router');
const routerCart = require('./cart.router');
const { verifyJwt } = require('../utils/verifyJWT');
const routerPurchase = require('./purchase.router');
const routerProductImg = require('./productImg.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', routerUser)
router.use('/categories', routerCategory)
router.use('/products', routerProduct)
router.use('/cart', verifyJwt, routerCart)
router.use('/purchase',verifyJwt, routerPurchase)
router.use('/product_images', verifyJwt, routerProductImg)

module.exports = router;