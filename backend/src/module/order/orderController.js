const bcrypt = require("bcrypt");
const Constant = require("../../config/constant");
const orderService = require("./orderService");
const jwt = require("../../helper/jwt");

module.exports = {
    //Add order
    createOrder : async(req, res) => {
        try{
            const user = req.user;
            const {shipping_address} = req.body;
            const orderDetails = {
                total_amount : 0,
                user_id : user.id,
                shipping_address : shipping_address
            }
            const result = await orderService.saveOrder(orderDetails);
            if(result){
                return res.status(Constant.SUCCESS_CODE).json({code : Constant.SUCCESS_CODE, data : result, message : "Order details add successfully"});
            }else{
                return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, message : "Failed"});
            }
        }catch(error){
            return res.status(Constant.INTERNAL_SERVER_ERR).json({code : Constant.INTERNAL_SERVER_ERR, message : error.message});
        }
    },

    //Get Order Details
    getOrderDetails : async(req, res) => {
        try{
            const user = req.user;
            const getUserOrder = await orderService.getAllOrderDetails(user.id);
            if(getUserOrder){
                return res.status(Constant.SUCCESS_CODE).json({code : Constant.SUCCESS_CODE, data : getUserOrder, message : "Order details get successfully"});
            }else{
                return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, message : "Failed"});
            }
        }catch(error){
            return res.status(Constant.INTERNAL_SERVER_ERR).json({code : Constant.INTERNAL_SERVER_ERR, message : error.message});
        }
    },

    //Add Order Item Details
    addOrderItemDetails : async(req,res) => {
        try{
            const order = req.order;
            const product = req.product;
            const orderDetails = {
                unit_price : 0,
                order_id : order.order_id,
                quantity : req.body.quantity,
                product_id : product.id
            }
            const result = await orderService.saveOrderItem(orderDetails);
            if(result){
                return res.status(Constant.SUCCESS_CODE).json({code : Constant.SUCCESS_CODE, data : result, message : "Order Item details add successfully"});
            }else{
                return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, message : "Failed"});
            }
        }catch(error){
            return res.status(Constant.INTERNAL_SERVER_ERR).json({code : Constant.INTERNAL_SERVER_ERR, message : error.message});
        }
    },

    //Get Order Item Details
    getOrderItemDetails : async(req, res) => {
        try{
            const getUserOrder = await orderService.getAllOrderItemDetails(
                req.body.page, 
                req.body.limit, 
                req.query.most_recent || false
            );
            if(getUserOrder){
                return res.status(Constant.SUCCESS_CODE).json({code : Constant.SUCCESS_CODE, data : getUserOrder, message : "Order item details get successfully"});
            }else{
                return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, message : "Failed"});
            }
        }catch(error){
            return res.status(Constant.INTERNAL_SERVER_ERR).json({code : Constant.INTERNAL_SERVER_ERR, message : error.message});
        }
    }
}