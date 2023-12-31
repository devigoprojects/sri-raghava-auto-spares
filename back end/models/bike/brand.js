const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},
{
    versionKey: false 
}
)

module.exports = mongoose.model('brands',brandSchema);