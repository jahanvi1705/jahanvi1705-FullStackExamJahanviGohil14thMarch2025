const UserModel = require("../../model/userModel");

module.exports = {
    //save user details
    saveUser : async (userDetails) => {
        const user = await UserModel.create(userDetails);
        return user;
    },
    
}