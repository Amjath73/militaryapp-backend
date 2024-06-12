const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { militarymodel } = require("./models/military")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://amjath:itsArkingtime7@cluster0.n01k0zd.mongodb.net/militaryDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req, res) => {
    let input = req.body
    let military = new militarymodel(input)
    console.log(military)
    military.save()
    res.json({ "status": "test" })
})

app.get("/view", (req, res) => {
    militarymodel.find().then(
        (data) => {
            res.json(data)
    }
    ).catch(
        (error) => {
            res.json(error)
        }
    )
})



app.listen(8081, ()=>{
    console.log("server started")

})