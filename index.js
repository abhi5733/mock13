
const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config()
const {connection} = require("./config/db")
const { userRouter } = require("./routes/userRoutes")
const {formRouter} = require("./routes/formRoute")
const {auth} = require("./middleware/auth")
app.use(cors())
app.use(express.json())

app.use("/user" , userRouter)

app.use(auth)

app.use("/form",formRouter)






app.listen(process.env.port, async ()=>{

    try{
await connection
console.log("connected to db")
    }catch(err){
        console.log(" cannot connecte to db")
    }

    console.log(`server running on port ${process.env.port}`)

})