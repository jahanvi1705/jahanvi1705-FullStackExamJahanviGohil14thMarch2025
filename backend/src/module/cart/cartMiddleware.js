const Constant = require("../../config/constant");
const Cart = require("../../model/cartModel");
const ProductSchema = require("../../model/productSchema");
const UserModel = require("../../model/userModel");

module.exports = {
    //Check product exists
    checkProduct : async(req, res, next) => {
        const product = await ProductSchema.findById(req.body.product_id);
        if(product){
            req.product = product;
            next();
        }else{
            return res.status(Constant.NOT_FOUND).json({status : Constant.NOT_FOUND, message : "Product not found"});
        }
    },
    
    //Check cart details
    checkCartDetail : async(req, res, next) => {
        const cart = await Cart.findOne({
            where : {cart_id : req.params.cart_id},
            include: [
                {
                  model: ProductSchema
                }
            ],
            include: [
                {
                  model : UserModel,
                  attributes : ['id', 'first_name', 'last_name', 'email']
                }
            ],
            raw : true
        });
        if(cart){
            if(cart.product_id != null || cart.product_id != ""){
                const product = await ProductSchema.findById(cart.product_id);
                cart.product = product;
            }
            req.cart = cart;
            next();
        }else{
            return res.status(Constant.NOT_FOUND).json({status : Constant.NOT_FOUND, message : "Cart details not found"});
        }
    },
}