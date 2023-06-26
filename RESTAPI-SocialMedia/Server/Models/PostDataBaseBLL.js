const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    _id: String,
    userid: String,
    body: String,
    postdsate: Date
})

module.exports = mongoose.model("Post", PostSchema)