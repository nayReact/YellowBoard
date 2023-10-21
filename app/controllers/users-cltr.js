const User = require('../models/user-model')
const { validationResult } = require('express-validator') //function for validation
const _ = require('lodash') // for sanitization
const usersCltr = {}

usersCltr.register = async(req, res) => {
    const errors = validationResult(req) //checking for error befor body is called
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() })
    }

    const body = _pick(req.body, ['username', 'email', 'password'])
    try {
        const user = new User(body)
        await user.save()
        res.json ( {
            message :"User is registered successfully"
        })

    } catch(e) {
        res.json(e)
    }
}
module.exports = usersCltr