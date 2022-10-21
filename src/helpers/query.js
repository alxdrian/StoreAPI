// QUERIES FOR DATABASE

const db = require('../database/database').db
const error = require('./error')

const findAll = (sql, queries) => {
  return new Promise((resolve, reject) => {
    db.all(sql, queries, (err, rows) => {
      if (err) {
        reject(error(500, 'Internal server error'))
      } else if (rows === null || rows.length === 0) {
        resolve([])
      } else {
        resolve(rows)
      }
    })
  })
}

const findOne = (sql, queries) => {
  return new Promise((resolve, reject) => {
    db.all(sql, queries, (err, rows) => {
      if (err) {
        reject(error(500, 'Internal server error'))
      } else if (rows === null || rows.length === 0) {
        reject(error(404, 'Entity was not found'))
      } else {
        resolve(rows)
      }
    })
  })
}

const run = (sql, queries) => {
  return new Promise((resolve, reject) => {
    db.run(sql, queries, (err) => {
      if (err) {
        reject(error(400, 'Entity was not created'))
      } else {
        resolve({result: 'ok'})
      }
    })
  })
}

module.exports = {
  findAll,
  findOne,
  run
}