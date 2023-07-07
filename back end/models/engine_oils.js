const mongoose = require('mongoose');

const engineOilSchema = mongoose.Schema({
      name:{type:String,required:true},
      image:{type:String,required:true},
      _id:{type:String,required:true}
},{
    versionKey: false 
});


module.exports = mongoose.model('engine oils',engineOilSchema);