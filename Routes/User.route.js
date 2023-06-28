const express=require("express")
const {UserModel} = require("../Models/User.model")

const userRouter=express.Router()




userRouter.get("/",async(req,res)=>{
    try{
       const users= await UserModel.find()
       res.send(users)
    }catch(err){
       console.log(err)
       res.send("Something Went Wrong")
    }
 })


userRouter.post("/",async(req,res)=>{
    const {name,email,phone}=req.body
    try{
                const user= new UserModel({name,email,phone})
                await user.save()
                res.send("Registered user")
            
        }
    catch(err){
        res.send("error in registering")
        console.log(err)
    }
}) 

userRouter.patch("/:id",async(req,res)=>{
    const ID=req.params.id
    const payload= req.body

    try{
      await UserModel.findByIdAndUpdate({_id:ID},payload)
      res.send("Updated")
    }
    catch(err){
        console.log(err)
        res.send("Something Went Wrong")
    }
})



module.exports={
    userRouter
}
