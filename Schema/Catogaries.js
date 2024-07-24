const mongoose=require('mongoose')
const catogaries=new mongoose.Schema({
    small:[{
        item_id:{type:String},
        item_name:{type:String},
        item_price:{type:Number},
        combo:[{
            cool_drink:{type:String},

        }]
    }],
    medium:[{
        item_id:{type:String},
        item_name:{type:String},
        item_price:{type:Number},
        combo:[{
            cool_drink:{type:String},
            
        }]
    }],
    large:[{
        item_id:{type:String},
        item_name:{type:String},
        item_price:{type:Number},
        combo:[{
            cool_drink:{type:String},
            
        }]
    }]
})
module.exports=mongoose.model('Catogaries',catogaries)