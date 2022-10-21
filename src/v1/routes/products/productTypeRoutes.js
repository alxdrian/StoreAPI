const express = require('express');
const router = express.Router();

const productTypeController = require('../../controllers/productTypeController')

router.route('/').get(productTypeController.getAllProductTypes)

module.exports = router