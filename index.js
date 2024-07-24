const express=require('express')
const app=express()
const mongoose=require('mongoose')
const morgan=require('morgan')
const bodyparser=require("body-parser")
app.use(express.json())
app.use(morgan('dev'))
app.use(bodyparser.json())
app.use(express.urlencoded({extended:true}))

const customer=require('./Schema/Customer')
const catogaries=require('./Schema/Catogaries')

app.listen(7766,()=>{
    console.log('port run');
    mongoose.connect('mongodb+srv://madhan91101:Mcabca%409@klncollege.ab2hmvj.mongodb.net/')
    .then(()=>{
        conn=mongoose.connection
        console.log('db connected');
    })
    .catch(()=>{
        console.log('db not connected');
    })

})

app.get('/',async(req,res)=>{
    res.send("welcome");
})

app.post('/customer/register',async(req,res)=>{
    try{
        const{customer_name,customer_coupen}=req.body
        const customer_register=new customer({
            customer_name,customer_coupen
        }).save()
        res.status(200).json({message:'registered',data:customer_register})
    }catch(error){
        res.status(500).json({message:'registeration failed'})
    }
})

app.get('/customer/details',async(req,res)=>{
    try{
        const c_detail=await customer.find({})
        res.status(200).json({message:'success',data:c_detail})
    }catch(error){
        res.status(500).json({message:'failed'})
    }
})
app.put('/customer/update',async(req,res)=>{
    try{
        //const{_id,customer_name,customer_coupen}=req.body
        const c_update=await customer.findOneAndUpdate({_id:req.body._id},
            {$set:{
                customer_coupen:req.body.customer_coupen
            }},{new:true})
            res.status(200).json({message:'customer updated',data:c_update})
    }catch(error){
        res.status(500).json({message:'customer updated failed'})
    }
})

app.delete('/customer/delete',async(req,res)=>{
    try{
        const c_delete=await customer.findOneAndDelete({_id:req.body._id})
        res.status(200).json({message:'deleted',data:c_delete})
    }catch(error){
        res.status(500).json({message:'deleted failed'})
    }
})

app.post('/items',async(req,res)=>{
    try{
        const{item_id,item_name,item_price}=req.body
        const small=new catogaries({
            item_id,item_name,item_price
        }).save()
        res.status(200).json({message:'success',data:small})
    }catch(error){
        res.status(500).json({message:'failed'})
    }
})
app.post('/small/items',async(req,res)=>{
    try{
        const{_id,item_id,item_name,item_price}=req.body
        const s_item=await catogaries.findOneAndUpdate({_id},
            {$push:{small:{
                item_id,item_name,item_price
            }}})
            res.status(200).json({message:'item added',data:s_item})
    }catch(error){
        res.status(500).json({message:'failed'})
    }
})
app.post('/medium/add',async(req,res)=>{
    try{
        const{item_id,item_name,item_price}=req.body
        const medium=new catogaries({
            item_id,item_name,item_price
        }).save()
        res.status(200).json({message:'success',data:medium})
    }catch(error){
        res.status(500).json({message:'failed'})
    }
})
app.post('/medium/items',async(req,res)=>{
    try{
        const{_id,item_id,item_name,item_price}=req.body
        const s_item=await catogaries.findOneAndUpdate({_id},
            {$push:{medium:{
                item_id,item_name,item_price
            }}})
            res.status(200).json({message:'item added',data:s_item})
    }catch(error){
        res.status(500).json({message:'failed'})
    }
})
app.post('/large/add',async(req,res)=>{
    try{
        const{item_id,item_name,item_price}=req.body
        const large=new catogaries({
            item_id,item_name,item_price
        }).save()
        res.status(200).json({message:'success',data:large})
    }catch(error){
        res.status(500).json({message:'failed'})
    }
})
app.post('/large/items',async(req,res)=>{
    try{
        const{_id,item_id,item_name,item_price}=req.body
        const s_item=await catogaries.findOneAndUpdate({_id},
            {$push:{small:{
                item_id,item_name,item_price
            }}})
            res.status(200).json({message:'item added',data:s_item})
    }catch(error){
        res.status(500).json({message:'failed'})
    }
})