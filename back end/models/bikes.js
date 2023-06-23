const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bikeCollectionsSchema = new Schema({
        name: String,
        image:String,
        brand: {
            type:Schema.Types.ObjectId,
            ref:"Brand Collections"
             },
});

const bikeModelCollectionsSchema = new Schema({
  
    bikeId: {
        type:Schema.Types.ObjectId,
        ref:"Bike Collections"
    },
    name: String,
});


const BikeModels = mongoose.model('Bike Models Collections',bikeModelCollectionsSchema);
const Bikes = mongoose.model('Bike Collections',bikeCollectionsSchema);
module.exports = {Bikes,BikeModels};