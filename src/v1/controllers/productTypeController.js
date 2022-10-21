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

const getProductTypeById = async (req, res, next) => {
  try {
    const productType = await productTypeService.getProductTypeById(req.params.id)
    res.status(200)
    res.send(utils.outputToApi(200, {data: productType}))
  } catch (error) {
    next(error)
  }
}

const createProductType = async (req, res, next) => {
  try {
    const productType = await productTypeService.createProductType(req.body)
    res.status(201)
    res.send(utils.outputToApi(200, {data: productType}))
  } catch (error) {
    next(error)
  }
}

 

module.exports = {
  getAllProductTypes,
  getProductTypeById,
  createProductType
}