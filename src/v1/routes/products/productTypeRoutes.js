const express = require('express');
const router = express.Router();

const productTypeController = require('../../controllers/productTypeController')

router.route('/').get(productTypeController.getAllProductTypes)
router.route('/').post(productTypeController.createProductType)
router.route('/:id').get(productTypeController.getProductTypeById)
router.route('/:id').put(productTypeController.updateProductType)
router.route('/:id').delete(productTypeController.deleteProductType)

module.exports = router