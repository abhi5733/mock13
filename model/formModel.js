const mongoose = require("mongoose")

const formSchema = mongoose.Schema({
name:String,
image:String,
specialization:String,
experience:Number,
location:String,
date:String,
slots:Number,
Fee:Number

})

const formModel = mongoose.model("form" , formSchema)

module.exports={formModel}






