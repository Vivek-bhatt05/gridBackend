const express=require("express")

const cors = require("cors")
const { connection } = require("./config/db")
const { userRouter } = require("./Routes/User.route")


const app=express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
}) 

app.use("/reg",userRouter)




app.listen(8000,async()=>{
    try{
        await connection
        console.log("Connected to database")
    }catch(err){
        console.log("Problem connecting")
        console.log(err)
    }
    console.log("Port running")
})
