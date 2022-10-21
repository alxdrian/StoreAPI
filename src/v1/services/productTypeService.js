const ProductType = require('../../database/ProductType')

const getAllProductTypes = async () => {
  try {
    const allProductTypes = await ProductType.getAllProductTypes()
    return allProductTypes
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllProductTypes
}