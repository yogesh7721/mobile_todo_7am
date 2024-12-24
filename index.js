const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/auth",require("./routes/auth.routes"))
app.use("/api/admin",require("./routes/admin.routes"))
app.use("/api/employee",require("./routes/employee.route"))
app.use("*",(req,res)=>{
    res.status(404).json({message:"resource not found"})
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open",()=>{
    console.log("mongo connect")
    app.listen(process.env.PORT,console.log("server runnung"))
})