let sqlite3 = require('sqlite3').verbose()

// Open database connection

let db = new sqlite3.Database('./product.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message)
  }
  console.log('Connected to the SQlite database.');
})

// Seeding Data

let init = () => {
  const sql = `
    CREATE TABLE productTypes (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      name TEXT NOT NULL UNIQUE,
      description TEXT NOT NULL,
      imageUrl TEXT
    )`
  const insert = 'INSERT INTO productTypes (name, description, imageUrl) VALUES (?,?,?)'

  db.serialize(() => {
    db.run(sql, (err) => {if (err) console.log('Table already exists.')})
      .run(insert, 
          ['Sello', 
          'Sellos con hermosos diseños en relieve metálico', 
          'https://cdn.shopify.com/s/files/1/2076/4473/products/Wax-Seal-Stamp-3.jpg?v=1615713462'],
          (err) => {if (err) console.log('Entity already exists.')})
      .run(insert, 
          ['Mango', 
          'Mangos especiales para sellos', 
          'https://i.etsystatic.com/31847384/r/il/f32ee4/3637622315/il_fullxfull.3637622315_mw81.jpg'],
          (err) => {if (err) console.log('Entity already exists.')})
  })
}

module.exports = {
  init: init,
  db: db
}