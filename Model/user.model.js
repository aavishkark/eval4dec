const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    label:String,
    slots:Array
},
{
    versionKey:false
})
const userModal=mongoose.model('usercontact',userSchema)
module.exports={userModal}