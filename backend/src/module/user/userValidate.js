const Constant = require("../../config/constant");
const Validator = require("validatorjs");


const register = async(req, res, next) => {
    const validationRule = {
        "first_name" : 'required|string',
        "last_name" : 'required|string',
        "email" : 'required|email',
        "password" : "required|string|min:8"
    }
    const v = new Validator(req.body, validationRule);
    if(v.fails()){
        return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, msg : v.errors.first('first_name') || v.errors.first('last_name') || v.errors.first('email') || v.errors.first('password')})
    }else{
        v.passes();
        next();
    }
}

const login = async(req, res, next) => {
    const validationRule = {
        "email" : 'required',
        "password" : "required"
    }
    const v = new Validator(req.body, validationRule);
    if(v.fails()){
        return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, msg : v.errors.first('email') || v.errors.first('password')})
    }else{
        v.passes();
        next();
    }
}

module.exports = {
    register,
    login
}