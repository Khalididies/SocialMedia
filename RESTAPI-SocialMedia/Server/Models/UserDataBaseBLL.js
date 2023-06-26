const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    _id: String,
    username: String,
    password: String
})

module.exports = mongoose.model("User", UserSchema)