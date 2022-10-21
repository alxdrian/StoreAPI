const productTypeService = require('../services/productTypeService')
const utils = require('../../helpers/utils')

const getAllProductTypes = async (req, res, next) => {
  try {
    const allProductTypes = await productTypeService.getAllProductTypes(req.query)
    res.status(200)
    res.send(utils.outputToApi(200, allProductTypes))
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllProductTypes
}