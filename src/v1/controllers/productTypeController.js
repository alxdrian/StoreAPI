const getAllProductTypes = (req, res, next) => {
  try {
    console.log('jol')
    res.status(200)
    res.send({product: 'products'})
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllProductTypes
}