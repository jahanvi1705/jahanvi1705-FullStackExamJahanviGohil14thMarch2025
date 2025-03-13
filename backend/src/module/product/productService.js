const productSchema = require("../../model/productSchema");

module.exports = {
    saveProduct : async(productDetails)=>{
        const product = await productSchema.create(productDetails);
        return product;
    },

    getAllProduct : async() => {
        const product = await productSchema.find();
        return product;
    },

    updateProductDetails : async(prod_id, produDetails) => {
        const product = await productSchema.findByIdAndUpdate(
            prod_id,
            {$set : produDetails},
            {new : true}
        );
        return product;
    },

    //delete product 
    deleteProduct : async(prod_id) => {
        const product = await productSchema.findByIdAndDelete(prod_id);
        return product;
    }
    
}