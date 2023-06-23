const {buildSchema} = require('graphql');


module.exports = buildSchema(
    `
    input SparePartInput{
        categoryId:ID,
        modelId:ID,
        name:String,
        description:String,
        quantity:Int,
        image: String,
        mrpPrice: Float,
        sellingPrice: Float,

    }

    type SparePart{
        _id:ID,
        categoryId:SpareCategory,
        modelId:ID,
        name:String,
        description:String,
        quantity:Int,
        image: String,
        mrpPrice: Float,
        sellingPrice: Float,

    }

    input SpareCategoryInput{
        _id:ID,
        name:String,
        image: String,
    }

    type SpareCategory{
        _id:ID,
        name:String,
        image: String,

    }

    input SpareQuantityUpdateInput{
        productId:ID
        value:Int
    }

    input BrandInput {
        name:String
        image:String
    }

    type Brands {
      _id:ID
      name:String
      image:String
    }

    input AddBikeInput {
        name:String
        image:String
        brand:ID
    }

    type Bikes {
        _id:ID
        name:String
        image:String
        brand:Brands
    }

    input AddBikeModelInput {
        name:String
        bikeId:ID
    }

    type BikeModels {
        _id:ID
        name:String
        bike:Bikes
    }

    type Query {
        bikes:[Bikes]
        bikeModels(bikeId:ID):[BikeModels]
        brands(name:String):[Brands]
        TotalSpareCount:Int
        AllspareParts:[SparePart]
        spareParts(categoryId:ID):[SparePart]
        spareCategories:SpareCategory
    }

    type Mutation {
        addBikeModel(input:AddBikeModelInput):BikeModels
        addBike(input:AddBikeInput):Bikes
        addBrand(input:BrandInput):Brands
        addSparePart(input:SparePartInput):SparePart
        addSpareCategory(input:SpareCategoryInput):SpareCategory
        spareQuantityUpdate(input:SpareQuantityUpdateInput):SparePart
    
    }

    `
);