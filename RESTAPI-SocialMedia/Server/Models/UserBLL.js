const Users = require("./UserDataBaseBLL")


// GET ALL - READ
const getAllUser = async() => {
    const User = await Users.find({})
    return User
}

//GET BY ID - READ
const getUserById = async(id) => {
    const User = await Users.findById(id)
    return User
}

// ADD one - CREATE
const addUser = async(obj) => {
    const newUser = new Users(obj)
    newUser._id= String(Math.floor((Math.random() * 100) + 1))
    await newUser.save()
    return 'Created'
}

// UPDATE one - UPDATE
const updateOneUser = async(id, obj) => {
    await Users.findByIdAndUpdate(id, obj)
    return "Updated"
}


// DELETE one - DELETE
const deleteOneUser = async(id) => {
    await Users.findByIdAndDelete(id)
    return "Deleted"
}

module.exports = { getAllUser, getUserById, addUser, updateOneUser, deleteOneUser }