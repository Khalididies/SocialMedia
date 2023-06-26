const express = require("express")
const router = express.Router()
const BLL = require("../Models/UserBLL")
require("dotenv").config()

const jwt = require("jsonwebtoken")

// localhost:8000/api/auth/login
router.post("/login", async(req, res) => {

    const username = req.body.username
    const password = req.body.password

    const users = await BLL.getAllUser()
    const user = users.find(user => user.username === username && user.password === password)
    console.log(users);

    // check if user and password match db
    if (user) {
        // get the user id = findUserById
        const userId = user._id

        // get the user role from the db
        const userRole = "CTO"

        // get the real secret key from db or env variable
        const RSA_PRIVATE_KEY = process.env.SECRET_KEY

        const token = jwt.sign({ id: userId }, RSA_PRIVATE_KEY, { expiresIn: 60 }) // expires in 30 seconds
        res.status(200).json({ auth: true, token: token, role: userRole,id: userId })
    } else {
        res.status(401).send({ auth: false })
    }
})

module.exports = router