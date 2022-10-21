const productTypeService = require('../services/productTypeService')

const getAllProductTypes = async (req, res, next) => {
  try {
    const allProductTypes = await productTypeService.getAllProductTypes()
    res.status(200)
    res.send({data: allProductTypes})
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllProductTypes
}