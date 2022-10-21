const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config();

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

module.exports = app