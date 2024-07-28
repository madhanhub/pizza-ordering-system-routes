const mongoose=require('mongoose')
const homedelivery=new mongoose.Schema({
    user_id:{
        type:String
    },
    user_name:{
        type:String
    },
    user_details:[{
        address:{type:String},
        mobile_no:{type:String},
        landmark:{type:String},
    }],
    order_details:[{
        order_id:{type:String},
        item_id:{type:String},
        item_name:{type:String},
        item_price:{type:Number}
    }]
})
module.exports=mongoose.model('HomeDeliveryorder',homedelivery)