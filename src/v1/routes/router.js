/* Express Router configuration */
 const express = require('express');
 const router = express.Router();
 
 /* V1 routes */
 router.use('/products/types', require('./products/productTypeRoutes'));
 
 module.exports = router;