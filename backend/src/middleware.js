const lodash = require("lodash");
const Jwt = require("./helper/jwt");
const Constant = require("./config/constant");
const UserModel = require("./model/userModel");

module.exports = {
    //Check auth user
    authenticateUser : async(req, res, next)=> {
        if(req.headers.authorization && !lodash.isEmpty(req.headers.authorization)){
            const tokenInfo = await Jwt.decodeAuthToekn(req.headers.authorization.toString());
            if(tokenInfo){
                const user = await UserModel.findOne({attributes : ['id', 'first_name', 'last_name', 'email', 'createdAt', 'updatedAt'], where : {id : tokenInfo.data}});
                if(user){
                    req.user = user;
                    next();
                }else{
                    return res.status(Constant.UNAUTHORIZED).json({code : Constant.UNAUTHORIZED, message : "Unauthorized"});
                }
            }else{
                return res.status(Constant.UNAUTHORIZED).json({code : Constant.UNAUTHORIZED, message : "Unauthorized"});
            }
        }else{
            return res.status(Constant.UNAUTHORIZED).json({code : Constant.UNAUTHORIZED, message : "Unauthorized"});
        }
    }
}