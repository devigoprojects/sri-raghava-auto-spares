const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const brandsSchema = new Schema({
        name: String,
        image:String,
});

const Brands = mongoose.model('Brand Collections',brandsSchema);
module.exports = Brands;