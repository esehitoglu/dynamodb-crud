const express = require('express')
const router = express.Router()
const productsController = require('../../controller/Products')

router.post('/',productsController.addProduct)
router.get('/',productsController.fetchAllProduct)
router.get('/search/:productId',productsController.singleProduct)
router.get('/isDiscount',productsController.fetchIsDiscount)
router.post('/delete',productsController.deleteProduct)
router.put('/',productsController.updateProduct)

module.exports = router
