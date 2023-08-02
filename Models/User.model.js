const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    date: Object
})

const UserModel = mongoose.model("user",userSchema);

module.exports={
    UserModel
}
