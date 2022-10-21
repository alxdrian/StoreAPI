const query = require('../helpers/query')

const getAllProductTypes = async (params) => {
  try {
    let sql = "SELECT * FROM product_types"

    sql += ` LIMIT ${params.limit}`
    sql += ` OFFSET ${params.offset}`
    
    const productTypes = await query.findAll(sql)
    return productTypes
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = {
  getAllProductTypes,
}