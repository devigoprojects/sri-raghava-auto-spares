const mongoose  = require('mongoose');
const brandModel = require('../../models/bike/brand.js');


// adding new brand

module.exports.addBrand = async(req,res)=>{
    if(typeof req.body == undefined){
        res.json({
            status:'error',
            message:'data is undefined'
        });
    }else{
        const brand = {
            name:req.body.name,
            image:req.body.image
        };
        try {
            const result = await brandModel(brand).save()
            res.json({
                status:'sucess',
                message:'uploaded sucessfully'
            })
        } catch (error) {
            res.json({
                status:'error',
                message:`${error}`
            })
        }
    }
}

// getting all brands

module.exports.getAllBrands = (req,res)=>{
    const limit = Number(req.query.limit) || 0;
    const sort = req.query.sort == 'desc' ? -1 : 1;

    brandModel.find()
              .limit(limit)
              .sort({id:sort})
              .then((brands) => {
                  res.json(brands);
              }).catch((err)=> {
                throw new Error(err)
              }
                )
}


// getting required brand

module.exports.brand =async (req,res)=>{
    const name = req.params.name;
    try {
        const result = await brandModel.findOne({name});
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