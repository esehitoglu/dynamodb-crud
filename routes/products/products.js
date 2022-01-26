const express = require('express')
const router = express.Router()
const productsController = require('../../controller/Products')

// I determined the operations to be made to the /products path
router.post('/',productsController.addProduct)
router.get('/',productsController.fetchAllProduct)
router.get('/search/:productId',productsController.singleProduct)
router.post('/search',productsController.singleProductQuery)
router.get('/isDiscount',productsController.fetchIsDiscount)
router.post('/delete',productsController.deleteProduct)
router.delete('/delete/:productId',productsController.delete)
router.put('/',productsController.updateProduct)

module.exports = router
