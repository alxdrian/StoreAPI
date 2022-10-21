const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const utils = require('./helpers/utils')
require('dotenv').config()

const app = express()

// Database
const database = require('./database/database')
database.init()

// Settings
app.set("port", process.env.PORT || 5000)

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use('/api/v1', require('./v1/routes/router'))

// Error Handler

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(utils.outputToApi(err.status || 500, err.message));
});


module.exports = app