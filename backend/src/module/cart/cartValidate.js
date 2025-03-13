const Constant = require("../../config/constant");
const Validator = require("validatorjs");

//save cart
const saveCart = async(req, res, next) => {
    const validationRule = {
        "quantity" : 'required|numeric',
        "product_id" : 'required|string',
    }
    const v = new Validator(req.body, validationRule);
    if(v.fails()){
        return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, msg : 
            v.errors.first('quantity') || v.errors.first('product_id')})
    }else{
        v.passes();
        next();
    }
}

module.exports = {
    saveCart
}