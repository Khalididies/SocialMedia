const express = require("express")
const app = express()
const cors = require("cors")

// DB connections:
require("./configs/database")

// Middleware
app.use(express.json())
app.use(cors())

const authController = require("./Controllers/authController")
const PostRouter = require("./Routers/PostRouter")
const UsersRouter = require("./Routers/UsersRouter")

//endpoints
app.use('/api/auth', authController)
app.use("/api/post", PostRouter)
app.use("/api/user", UsersRouter)

app.listen(8000, () => {
    console.log("Server is listening on port 8000")
})