// QUERIES FOR DATABASE

const db = require('../database/database').db
const error = require('./error')

exports.findAll = (sql) => {
  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) {
        reject(error(500, 'Internal server error'))
      } else if (rows === null || rows.length === 0) {
        reject(error(400, 'Entities not found'))
      } else {
        resolve(rows)
      }
    })
  })
}

