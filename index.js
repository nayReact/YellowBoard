require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { checkSchema } = require('express-validator') //function in exp-validator, 
const configureDB = require('./config/db')

const usersCltr = require('./app/controllers/users-cltr')
const userValidationSchema = require('./app/helpers/user-validation')
const PORT = 3013
const app = express()
app.use(express.json())
app.use(cors())

configureDB()
app.post ('/auth/register', checkSchema(userValidationSchema), usersCltr.register) //triggering before the routing is called
app.listen(PORT, () => {
    console.log('Server is running on PORT', PORT)
})