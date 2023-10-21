const mongoose = require('mongoose')
const configureDB = async () => {
    try {
        const db = await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
        console.log("Connected to DB")
    } catch(e) {
        console.log("Error while connecting to DB")
    }
}
module.exports = configureDB