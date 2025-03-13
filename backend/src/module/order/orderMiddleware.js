const Constant = require("../../config/constant");
const Order = require("../../model/orderModel");
const ProductSchema = require("../../model/productSchema");

module.exports = {
    //Check Order
    checkOrder : async(req, res, next) => {
        const order = await Order.findOne({where : { order_id : req.body.order_id}});
        if(order){
            req.order = order;
            next();
        }else{
            return res.status(Constant.NOT_FOUND).json({status : Constant.NOT_FOUND, message : "Order not found"});
        }
    },

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
}