const express = require('express')
const router = express.Router()
const productsEndPoint = require('./products/products')

router.use('/products',productsEndPoint)

module.exports = router
