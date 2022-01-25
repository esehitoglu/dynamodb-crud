const express = require('express')
const router = express.Router()
const productsEndPoint = require('./products/products')

// I defined the router file that will be forwarded when a request is made to the /products path
router.use('/products',productsEndPoint)

module.exports = router
