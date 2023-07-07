const mongoose = require('mongoose');
const bikeModel = require('../../models/bike/bikes');


// adding new bike

module.exports.addBike =async (req,res)=>{
    const bike = {
        name:req.body.name,
        image:req.body.image,
        brand:req.body.brand
    };

    try {
        const result = await bikeModel(bike).save();
        res.json({
            status:'sucess',
            message:'uploaded sucessfully'
        });
    } catch (error) {
        res.json({
            status:'error',
            message:`${error}`
        })
    }

}


// getting all bikes

module.exports.getallBikes = async(req,res)=>{
    const limit = Number(req.query.limit) || 0;
    const sort = req.query.sort == 'desc' ? -1 : 1;

    try {
        const result = await bikeModel.find()
                             .limit(limit)
                             .sort({id:sort});
        res.json(result);
    } catch (error) {
        res.json({
            status:'error',
            message:`${error}`
        })
    }
}


// get particular bike by bike name

module.exports.bikeByName = async(req,res)=>{
    const name = req.params.name;
    try {
        const result = await bikeModel.find({name:{$regex:name,$options:"i"}});
        if(result == null){
            res.status(404).json({
                message:'no data found'
            })
        }else{
            res.json(result)
        }
        
    } catch (error) {
        res.json({
            status:'error',
            message:`${error}`
        })
    }
}


// get particular bike by brand id

module.exports.bikeByBrandId = async(req,res)=>{
    const brandId = req.params.brandId;
    try {
        const data = await bikeModel.find({brand:brandId});
        const count = await bikeModel.countDocuments({
            brand:brandId
        })
        if(data == null){
            res.status(404).json({
                message:'no data found'
            })
        }else{
            res.json({
                count,
                data
            })
        }
        
    } catch (error) {
        res.json({
            status:'error',
            message:`${error}`
        })
    }
}