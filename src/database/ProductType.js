const query = require('../helpers/query')

// GET ALL PRODUCT TYPES

const getAllProductTypes = async (params) => {
  try {
    let sql = "SELECT * FROM productTypes WHERE 1=1"
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
    let sql = "SELECT COUNT(*) AS count FROM productTypes WHERE 1=1"
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

// GET PRODUCT TYPE BY ID

const getProductTypeById = async (id) => {
  try {
    let sql = "SELECT * FROM productTypes WHERE 1=1 AND id = ?"
    const productType = await query.findOne(sql, [id]);
    return productType
  } catch (error) {
    console.log(error)
    throw error
  }
}

// CREATE PRODUCT TYPE

const createProductType = async (params) => {
  try {
    let sql = "INSERT INTO productTypes (name, description, imageUrl) VALUES (?,?,?)"
    let queries = [params.name, params.description, params.imageUrl]

    const productType = await query.run(sql, queries);
    return productType
  } catch (error) {
    console.log(error)
    throw error
  }
}

// UPDATE PRODUCT TYPE

const updateProductType = async (id, params) => {
  try {
    let sql = "UPDATE productTypes SET"
    let queries = []

    let sqlParams = []
    Object.entries(params).forEach(([name, value]) => {
      sqlParams.push(` ${name} = ?`)
      queries.push(value)
    })

    sql += sqlParams.join(',') + " WHERE id = ?"
    queries.push(id)

    const productType = await query.run(sql, queries);
    return productType
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = {
  getAllProductTypes,
  countAllProductTypes,
  getProductTypeById,
  createProductType,
  updateProductType
}