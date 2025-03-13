const Constant = require("../../config/constant");
const UserModel = require("../../model/userModel");

module.exports = {
    //Check user exists
    checkUserEmail : async(req, res, next) => {
        const user = await UserModel.findOne({ where : {email : req.body.email}});
        if(!user){
            req.user = user;
            next();
        }else{
            return res.status(Constant.BAD_REQUEST).json({status : Constant.BAD_REQUEST, message : "User already exists"});
        }
    },

    //Check user
    checkUser : async(req, res, next) => {
        const user = await UserModel.findOne({ where : {email : req.body.email}});
        if(user){
            req.user = user;
            next();
        }else{
            return res.status(Constant.NOT_FOUND).json({status : Constant.NOT_FOUND, message : "User not found"});
        }
    }
}