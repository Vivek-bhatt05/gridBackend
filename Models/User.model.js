const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    date: String
})

const UserModel = mongoose.model("user",userSchema);

module.exports={
    UserModel
}
