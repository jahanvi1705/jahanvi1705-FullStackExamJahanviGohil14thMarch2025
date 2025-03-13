const cartModel = require("../../model/cartModel");

module.exports = {
    addTocartProd : async(cartDetails)=>{
        const addToCart = await cartModel.create(cartDetails);
        return addToCart;
    },
}