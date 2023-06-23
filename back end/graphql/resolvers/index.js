const mongoose = require('mongoose');
const SpareModel = require('../../models/spareParts');
const Brands = require('../../models/brands');
const Bikes = require('../../models/bikes')

const category = async categoryId => {
    try {
        const category = await SpareModel.SpareCategories.findById(categoryId);
    
        return {...category._doc}
    } catch (error) {
          throw error;
    }
}

const brand = async brandId => {
    try {
      const result = await Brands.findById(brandId);
      
      return result;
    } catch (error) {
      throw error;
    }
  }

  const bikeDetails = async bikeId => {
    try {
      const result = await Bikes.Bikes.findById(bikeId);
      return result;
    } catch (error) {
      throw error;
    }
  }


// const modelId = async modelId => {
//     try {
//         const modelId = await Spa
//     } catch (error) {
//         throw error;
//     }
// }



module.exports = {

    //  Adding Brands
    addBrand : async (args) => {
        const add = new Brands({
           name:args.input.name,
           image:args.input.image
        });
        try {
            const result = await add.save();
            return result;
        } catch (error) {
             throw error;
        }
    },

    // getting all brands

    brands : async (args) => {
      try {
        const result = await Brands.find(args);
        return result;
      } catch (error) {
        throw error;
      }
    },


    // adding bikes 

    addBike : async (args)=>{
        const add = new Bikes.Bikes({
            name:args.input.name,
            image:args.input.image,
            brand:args.input.brand

        });
       try {
        const result  = await add.save();
        return result;
       } catch (error) {
        
       }
    },

    // get bikes

    bikes:async (args)=>{
        try {
            
            const result = await Bikes.Bikes.find();
           
            return result.map(
                bike =>{
                   
                return {...bike._doc,brand:brand.bind(this,bike._doc.brand)}
                }
            );
        } catch (error) {
            
        }
    },

    // adding bike models

    addBikeModel : async (args)=>{
        const data = new Bikes.BikeModels({
            name:args.input.name,
            bikeId:args.input.bikeId
            
        });
       try {
        const result = await data.save();
        return result;
       } catch (error) {
        throw error;
       }
    },

    // getting bike models

    bikeModels : async (bikeId)=>{
       try {
        const result = await Bikes.BikeModels.find({bikeId:bikeId.bikeId})
        
        return result.map(
            bike => {
                return {...bike._doc,bike:bikeDetails.bind(this,bike._doc.bikeId)}
            }
        );
       } catch (error) {
        throw error
       }
    },

    // Adding new spare part

    addSparePart  : async (args) => {
        const addSparePart = new SpareModel.Spares({
            categoryId:args.input.categoryId,
            modelId:args.input.modelId,
            name:args.input.name,
            description:args.input.description,
            quantity:args.input.quantity,
            image: args.input.image,
            mrpPrice: args.input.mrpPrice,
            sellingPrice: args.input.sellingPrice,

        });
        try {
            // const existingSpare = SpareModel.Spares.findOne({
            
            // })
         const result = await addSparePart.save();
         return {...result._doc}
          
        } catch (error) {
            throw error;
        }
    },

    // Addin new spare category

    addSpareCategory :async (args) =>{
        const newCategory = new SpareModel.SpareCategories({
            name:args.input.name,
            image:args.input.image
        });
        try {
            const result = await newCategory.save();
            return {...result._doc}
        } catch (error) {
             throw error;
        }
    },


//   Quering All the spare parts

        TotalSpareCount : async()=>{
            try {
                 const count = await SpareModel.Spares.count();
                 return count;
            } catch (error) {
                throw error
            }
        },

        AllspareParts: async () => {
            try {
                const result = await SpareModel.Spares.find();
                return result.map(
                    spares=>{
                        return {...spares._doc}
                    }
                );
            } catch (error) {
                throw error;
            }
        },


        //   Quering  spare parts of particular category
        spareParts: async (categoryId) => {
            try {
                const result = await SpareModel.Spares.find(categoryId);
      
                return result.map(
                    spares=>{
                       
                        return {...spares._doc,categoryId:category.bind(this,spares._doc.categoryId)}
                    }
                );
            } catch (error) {
                throw error;
            }
        },


        // Updating product quantity in stock
        spareQuantityUpdate:async (args)=>{
            try {
                const result = await SpareModel.Spares.updateOne(
                    {_id:args.input.productId},
                    {$inc:{quantity:args.input.value}}
                );
            
                return result;
            } catch (error) {
                throw error;
            }
        },


}