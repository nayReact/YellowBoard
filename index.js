require('dotenv').config()
const express = require('express')
const cors = require('cors')
const configureDB = require('./config/db')
const PORT = 3013
const app = express()
app.use(express.json())
app.use(cors())

configureDB()

app.listen(PORT, () => {
    console.log('Server is running on PORT', PORT)
})