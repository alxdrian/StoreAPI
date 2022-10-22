const express = require('express');
const router = express.Router();

const productTypeController = require('../../controllers/productTypeController')

// Route GET /api/v1/products/types?
router.route('/').get(productTypeController.getAllProductTypes)

// Route POST /api/v1/products/types
router.route('/').post(productTypeController.createProductType)

// Route GET /api/v1/products/types/:id
router.route('/:id').get(productTypeController.getProductTypeById)

// Route PUT /api/v1/products/types/:id
router.route('/:id').put(productTypeController.updateProductType)

// Route DELETE /api/v1/products/types/:id
router.route('/:id').delete(productTypeController.deleteProductType)

module.exports = router