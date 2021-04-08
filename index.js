const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 9000

const path = require("path") // comes with Nodejs don't need to install dependency.

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "client/build"))) // express.static is a built in function that basically tells it what to load. Then we include what to laod. Here we included the directory name, then go into client, then go into the build folder.


app.use("/api/", (_, res)=>{
    res.json({data: "API is accounted for"})
})


app.listen(port, ()=>{
    console.log(`Server is alive on port: ${port}`)
})

console.log("It's alive!")
console.log(__dirname)
console.log(__filename)
console.log(process.env.USER) // mac USER
console.log(process.env.PORT)
console.log(process.env.FOOD)
console.log(process.env.REALLY)
console.log(process.env.GREET)

