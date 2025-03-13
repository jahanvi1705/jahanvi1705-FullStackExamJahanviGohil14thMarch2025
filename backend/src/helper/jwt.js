const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    //generate auth token
    getAuthToken(data) {
        return jwt.sign({data}, process.env.JWT_SECRET, {expiresIn : '24h'});
    },

    //Decode auth token
    decodeAuthToekn : async(token) => {
        if(token){
            try{
                return jwt.verify(token, process.env.JWT_SECRET);
                
            }catch(error){
                return false;
            }

        }return false;
    }
}