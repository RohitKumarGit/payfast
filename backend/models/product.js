const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ProductSchema = Schema({
    name : String,
    quantity :Number,
    instruction :String,
    price :Number,
    
})