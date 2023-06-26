const express = require("express")
const router = express.Router()
const BLL = require("../Models/UserBLL")
const verifyToken = require("../Middlewares/verifyToken").verifyToken


router.post("/", async (req, res) => {
    const newUsers = req.body
    
    if (newUsers) {
        const status = await BLL.addUser(newUsers)
        res.json(status)
    } else {
        res.status(400).send({ auth: false })
    }
})

router.get("/", verifyToken, async (req, res) => {
    const isVerified = req.headers["isVerified"]

    if (isVerified) {
        const Users = await BLL.getAllUser()
        res.json(Users)
    } else {
        res.status(401).send({ auth: false })
    }
})

router.get("/:id", verifyToken, async (req, res) => {
    const isVerified = req.headers["isVerified"]

    const id = req.params.id
    if (isVerified) {
        const User = await BLL.getUserById(id)
        res.json(User)
    } else {
        res.status(401).send({ auth: false })
    }
})

router.put("/:id", verifyToken, async (req, res) => {
    const isVerified = req.headers["isVerified"]

    const id = req.params.id
    const newUsers = req.body
    if (isVerified) {
        const status = await BLL.updateOneUser(id, newUsers)
        res.json(status)
    } else {
        res.status(401).send({ auth: false })
    }
})

router.delete("/:id", verifyToken, async (req, res) => {
    const isVerified = req.headers["isVerified"]
    
    const id = req.params.id
    if (isVerified) {
        const status = await BLL.deleteOneUser(id)
        res.json(status)
    } else {
        res.status(401).send({ auth: false })
    }
})

module.exports = router