const Constant = require("../../config/constant");
const Validator = require("validatorjs");

//save order
const saveOrder = async(req, res, next) => {
    const validationRule = {
        "shipping_address" : 'required'
    }
    const v = new Validator(req.body, validationRule);
    if(v.fails()){
        return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, msg : 
            v.errors.first('total_amount') || v.errors.first('shipping_address')})
    }else{
        v.passes();
        next();
    }
}

//Add orderItem details validation
const saveOrderItem = async(req, res, next) => {
    const validationRule = {
        "quantity" : 'required',
        "order_id" : 'required',
        "product_id" : 'required',
        "page" : 'required|numeric',
        "limit" : 'required|numeric',
    }
    const v = new Validator(req.body, validationRule);
    if(v.fails()){
        return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, msg : 
            v.errors.first('quantity') || v.errors.first('order_id') || v.errors.first('product_id') 
            || v.errors.first('page') || v.errors.first('limit')})
    }else{
        v.passes();
        next();
    }
}

//gwt orderItem details validation
const getOrderItem = async(req, res, next) => {
    const validationRule = {
        "page" : 'required|numeric',
        "limit" : 'required|numeric',
    }
    const v = new Validator(req.body, validationRule);
    if(v.fails()){
        return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, msg : 
            v.errors.first('page') || v.errors.first('limit')})
    }else{
        v.passes();
        next();
    }
}


module.exports = {
    saveOrder,
    saveOrderItem,
    getOrderItem
}