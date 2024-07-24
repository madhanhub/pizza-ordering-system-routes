const mongoose=require('mongoose')
const customer=new mongoose.Schema({
    customer_name:{
        type:String
    },
    customer_coupen:{
        type:Number
    }
})
module.exports=mongoose.model('Customer',customer)