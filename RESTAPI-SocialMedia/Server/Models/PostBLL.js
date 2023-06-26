const Post = require("./PostDataBaseBLL")


// GET ALL - READ
const getAllPost = async() => {
    const Pro = await Post.find({})
    return Pro
}

//GET BY ID - READ
const getPostById = async(id) => {
    const Pro = await Post.findById(id)
    return Pro
}

// ADD one - CREATE
const addPost = async(obj) => {
    const newPost = new Post(obj)
    newPost._id= String(Math.floor((Math.random() * 100) + 1))
    await newPost.save()
    return 'Created'
}

// UPDATE one - UPDATE
const updateOnePost = async(id, obj) => {
    await Post.findByIdAndUpdate(id, obj)
    return "Updated"
}


// DELETE one - DELETE
const deleteOnePost = async(id) => {
    await Post.findByIdAndDelete(id)
    return "Deleted"
}

module.exports = { getAllPost, getPostById, addPost, updateOnePost, deleteOnePost }