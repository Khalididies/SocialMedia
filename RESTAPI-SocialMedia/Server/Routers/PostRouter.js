const express = require("express")
const router = express.Router()
const BLL = require("../Models/PostBLL")
const verifyToken = require("../Middlewares/verifyToken").verifyToken


// localhost:8000/api/post
router.get("/", verifyToken, async (req, res) => {
    const isVerified = req.headers["isVerified"]

    if (isVerified) {
        const Posts = await BLL.getAllPost()
        res.json(Posts)
    } else {
        res.status(401).send({ auth: false })
    }

})

router.get("/:id", verifyToken, async (req, res) => {
    const isVerified = req.headers["isVerified"]

    const id = req.params.id
    if (isVerified) {
        const Post = await BLL.getPostById(id)
        res.json(Post)
    } else {
        res.status(401).send({ auth: false })
    }
})

router.post("/", verifyToken, async (req, res) => {
    const isVerified = req.headers["isVerified"]

    const newPost = req.body
    if (isVerified) {
        const status = await BLL.addPost(newPost)
        res.json(status)
    } else {
        res.status(401).send({ auth: false })
    }
})

// router.post("/photo",verifyToken, function (req, res) {
//     var newItem = new Item();
//     newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//     newItem.img.contentType = "image/png";
//     newItem.save();
// });


router.put("/:id", verifyToken, async (req, res) => {
    const isVerified = req.headers["isVerified"]

    const id = req.params.id
    const newPost = req.body
    if (isVerified) {
        const status = await BLL.updateOnePost(id, newPost)
        res.json(status)
    } else {
        res.status(401).send({ auth: false })
    }
})


router.delete("/:id", verifyToken, async (req, res) => {
    const isVerified = req.headers["isVerified"]

    const id = req.params.id
    if (isVerified) {
        const status = await BLL.deleteOnePost(id)
        res.json(status)
    } else {
        res.status(401).send({ auth: false })
    }
})

module.exports = router