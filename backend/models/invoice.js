const mongoose = require('mongoose');
const Schema = mongoose.Schema
const InvoiceSchema = Schema({
    customer_name :String ,
    customer_phone:Number ,
    shop_id :{
        type:Schema.Types.ObjectId,
        ref:"Shop"
    },
    items :[{
        product:{
            type :Schema.Types.ObjectId,
            ref:"Product"
        },
        quantity :{
            type : Number
        },
        discounted_price :Number
    }],
    discount :{
        type:Number,
        default:0
    },
    rating :Number
},{
    timestamps:true
})
const Invoice = mongoose.model("Invoice",InvoiceSchema)
module.exports = Invoice

