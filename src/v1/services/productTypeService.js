const ProductType = require('../../database/ProductType')
const utils = require('../../helpers/utils')

const getAllProductTypes = async (params) => {
  try {
    const filters = utils.parseFilters(params)
    const allProductTypes = await ProductType.getAllProductTypes(filters)
    const count = await ProductType.countAllProductTypes(filters)
    return utils.apiEncodeList({
      list: allProductTypes,
      count,
      url: '/products/types',
      args: utils.getParamsList(params),
      ...filters
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllProductTypes
}