const mongoose=require("mongoose")

const connection=mongoose.connect('mongodb+srv://vivekb:bhatt@cluster0.sh1usr8.mongodb.net/userdata?retryWrites=true&w=majority')

module.exports={
    connection
}