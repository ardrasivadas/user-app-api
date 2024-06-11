const express = require("express")
const moongoose = require("mongoose")
const cors = require("cors")
const {usermodel} = require("./models/user")
const { default: mongoose } = require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://ardra:ardrac1543@cluster0.tehzzbx.mongodb.net/userdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    let user = new usermodel(input)
    user.save()
    console.log(user)
    res.json({status:"done"})
})

app.get("/view",(req,res)=>{
    usermodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8080,()=>{
    console.log("server started")
})