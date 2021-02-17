const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const ShopSchema = new Schema({
    Name : String ,
    owner :{
        type : Schema.Types.ObjectId,
        ref:"Client"
    },
    phone :{
        type:Number,
        required:true
    },
    email :{
        type:String ,
        required :true
    },
    pin_code :{
        type:Number
    },
    address:{
        type:String
    },
    alt_phone :{
        type:Number
    },
    alt_email :{
        type:String
    },
    aadhar :{
        type:String 
    },
    gstin:{
        type:String
    },
    pan :{
        type:String
    }
})
const Shop = mongoose.model("Shop",ShopSchema)
module.exports = Shop