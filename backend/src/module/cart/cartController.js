const Constant = require("../../config/constant");
const cartService = require("./cartService");

module.exports = {
    //Add to cart product
    addToCart : async(req, res) => {
        try{
            const user = req.user;
            const product = req.product;
            const cartDetails = {
                quantity : req.body.quantity,
                user_id : user.id, 
                product_id : product._id.toString()
            }
            const result = await cartService.addTocartProd(cartDetails);
            if(result){
                return res.status(Constant.SUCCESS_CODE).json({code : Constant.SUCCESS_CODE, data : result, message : "Add to cart order added successfully"});
            }else{
                return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, message : "Failed"});
            }
        }catch(error){
            return res.status(Constant.INTERNAL_SERVER_ERR).json({code : Constant.INTERNAL_SERVER_ERR, message : error.message});
        }
    },

    //Get Cart
    getCartData : async(req, res) => {
        try{
            const cart = req.cart;
            if(cart){
                return res.status(Constant.SUCCESS_CODE).json({code : Constant.SUCCESS_CODE, data : cart, message : "Cart details get successfully"});
            }else{
                return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, message : "Failed"});
            }
        }catch(error){
            return res.status(Constant.INTERNAL_SERVER_ERR).json({code : Constant.INTERNAL_SERVER_ERR, message : error.message});
        }
    },

}