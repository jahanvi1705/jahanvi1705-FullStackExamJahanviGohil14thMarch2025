const bcrypt = require("bcrypt");
const Constant = require("../../config/constant");
const userService = require("./userService");
const jwt = require("../../helper/jwt");

module.exports = {
    //Register User
    Register : async(req, res) => {
        try{
            const {first_name, last_name, email} = req.body;
            const userDetails = {
                first_name : first_name,
                last_name : last_name,
                email : email,
                password : await bcrypt.hash(req.body.password, 10)
            }
            const result = await userService.saveUser(userDetails);
            if(result){
                return res.status(Constant.SUCCESS_CODE).json({code : Constant.SUCCESS_CODE, message : "User register successfully"});
            }else{
                return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, message : "Failed"});
            }
        }catch(error){
            return res.status(Constant.INTERNAL_SERVER_ERR).json({code : Constant.INTERNAL_SERVER_ERR, message : error.message});
        }
    },

    //login User
    login : async(req, res) => {
        try{
            const user = req.user;
            const comparePwd = await bcrypt.compareSync(req.body.password, user.password)
            if(comparePwd){
                const token = jwt.getAuthToken(user.id);
                return res.status(Constant.SUCCESS_CODE).json({code : Constant.SUCCESS_CODE, data : token, message : "Login successfully"});
            }else{
                return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, message : "Invalid credentials"});
            }
        }catch(error){
            return res.status(Constant.INTERNAL_SERVER_ERR).json({code : Constant.INTERNAL_SERVER_ERR, message : error.message});
        }
    },

    //Get user profile
    getUserProfile : async(req, res) => {
        try{
            const user = req.user;
            if(user){
                return res.status(Constant.SUCCESS_CODE).json({code : Constant.SUCCESS_CODE, data : user, message : "Login successfully"});
            }else{
                return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, message : "Invalid credentials"});
            }
        }catch(error){
            return res.status(Constant.INTERNAL_SERVER_ERR).json({code : Constant.INTERNAL_SERVER_ERR, message : error.message});
        }
    },
}