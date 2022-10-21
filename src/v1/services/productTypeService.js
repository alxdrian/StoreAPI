const ProductType = require('../../database/ProductType')
const utils = require('../../helpers/utils')

const getAllProductTypes = async (params) => {
  try {
    const filters = utils.parseFilters(params)
    const allProductTypes = await ProductType.getAllProductTypes(filters)
    return utils.apiEncodeList({
      list: allProductTypes,
      url: '/products/types',
      ...filters
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllProductTypes
}