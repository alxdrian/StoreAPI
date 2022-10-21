const query = require('../helpers/query')

const getAllProductTypes = async (params) => {
  try {
    let sql = "SELECT * FROM product_types WHERE 1=1"
    let queries = []

    if (params.name) {
      sql += ` AND name LIKE ?`
      queries.push(`%${params.name}%`)
    }
    
    sql += ` LIMIT ${params.limit}`
    sql += ` OFFSET ${params.offset}`

    const productTypes = await query.findAll(sql, queries);
    return productTypes
  } catch (error) {
    console.log(error)
    throw error
  }
}

const countAllProductTypes = async (params) => {
  try {
    let sql = "SELECT COUNT(*) AS count FROM product_types WHERE 1=1"
    let queries = []

    if (params.name) {
      sql += ` AND name LIKE ?`
      queries.push(`%${params.name}%`)
    }

    const count = await query.findAll(sql, queries)
    return count[0].count
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = {
  getAllProductTypes,
  countAllProductTypes
}