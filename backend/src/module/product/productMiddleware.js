const Constant = require("../../config/constant");
const ProductSchema = require("../../model/productSchema");

module.exports = {
    //Check product exists
    checkProduct : async(req, res, next) => {
        const product = await ProductSchema.findById(req.params.prod_id);
        if(product){
            req.product = product;
            next();
        }else{
            return res.status(Constant.NOT_FOUND).json({status : Constant.NOT_FOUND, message : "Product not found"});
        }
    },
}