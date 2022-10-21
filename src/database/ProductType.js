const query = require('../helpers/query')

const getAllProductTypes = async () => {
  try {
    let sql = "SELECT * FROM product_types"
    const productTypes = await query.findAll(sql);
    return productTypes
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = {
  getAllProductTypes,
}