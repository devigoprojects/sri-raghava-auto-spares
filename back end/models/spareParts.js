const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const sparePartCategorySchema = new Schema({
  
    name: String,
    image: String,
});

const sparePartsSchema = new Schema({
  
    categoryId: {
        type:Schema.Types.ObjectId,
        ref:"Spare Categories"
    }, 
    modelId: {
        type:Schema.Types.ObjectId,
        ref:''
    },
    name:String,
    description:String,
    quantity:Number,
    image: String,
    mrpPrice: Number,
    sellingPrice: Number,
  });


const SpareCategories = mongoose.model('Spare Categories',sparePartCategorySchema);
const Spares = mongoose.model('Spare Collections',sparePartsSchema);
module.exports = {Spares,SpareCategories};