const uploadFile = require("../middlewares/upload_image");
const collections = require("../models/collections");


// get all collections

module.exports.getAllCollections = async(req,res)=>{
    try {
        const data = await collections.find();
        res.json(data);
    } catch (error) {
        res.json({
            status:'error',
            message:`${error}`
        })
    }
}

// add new collection

module.exports.addCollection = async(req,res)=>{
    try {
        const image = req.file;
        const imageUrl = await uploadFile(image);
        const input = {
            name:req.param.name,
            image:imageUrl
        }
        const data = await collections(input).save();
        res.json({
            status:'success',
            message:'added successfully'
          })
    } catch (error) {
        res.json({
            status:'error',
            message:`${error}`
          })
    }
}