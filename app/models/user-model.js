const mongoose = require('mongoose')
const { model, Schema } = mongoose
const userSchema = new Schema ({
    username : String,
    email: String,
    mobile: Number,
    password:String,
    role: [
        admin, operator, traveller
    ],
}, {timestamps: true})

const User = model('User', userSchema)

module.exports = User 