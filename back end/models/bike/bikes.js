const mongoose = require('mongoose');
const brand = require('./brand');
const Schema = mongoose.Schema;

const BikeModel = new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    brand:{
        type: Schema.ObjectId,
        ref:brand,
        required:true
    }
},{
    versionKey: false 
});

module.exports = mongoose.model('bikes',BikeModel);