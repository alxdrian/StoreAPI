const express = require('express');
const router = express.Router();

const productTypeController = require('../../controllers/productTypeController')

router.route('/').get(productTypeController.getAllProductTypes)
router.route('/:id').get(productTypeController.getProductTypeById)

module.exports = router