const Constant = require("../../config/constant");
const Validator = require("validatorjs");


const createProduct = async(req, res, next) => {
    const validationRule = {
        "name" : 'required|string',
        "price" : 'required|numeric'
    }
    const v = new Validator(req.body, validationRule);
    if(v.fails()){
        return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, msg : 
            v.errors.first('name') || v.errors.first('price')})
    }else{
        v.passes();
        next();
    }
}

module.exports = {
    createProduct
}