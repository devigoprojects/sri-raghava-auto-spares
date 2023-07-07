const uploadFile = require("../middlewares/upload_image");
const engine_oils = require("../models/engine_oils");


// uploading new oil

module.exports.addEngineOil = async(req,res)=>{
    
    try {

       const image = req.file;
    //     // upload the file to google drive
       const imageUrl = await uploadFile(image);
        const input = {
            name:req.body.name,
            _id:req.body.id,
            image:imageUrl
        };
          const data = await engine_oils(input).save();
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

// getting new oil

module.exports.getOils = async(req,res)=>{
    const search = req.query.search || '';
    const limit = req.query.limit || 8;
    try {
        const data = await engine_oils.find({name:{$regex:search,$options:"i"}})
                                      .limit(limit);
        res.json({
            count:data.length,
            data
        })
    } catch (error) {
        res.json({
            status:'error',
            message:`${error}`
        })
    }
}