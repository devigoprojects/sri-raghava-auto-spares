const {Schema,model} = require('mongoose');

const collectionSchema = new Schema({
    name:{type:String,required:true},
    image:{type:String}
},
{
    versionKey:false
}
);

module.exports = model('collections',collectionSchema);