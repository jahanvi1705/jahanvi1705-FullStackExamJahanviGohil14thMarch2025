const express = require("express");
const cartController = require("./cartController");
const middleware = require("../../middleware");
const cartMiddleware = require("./cartMiddleware");

const cartValidate = require("./cartValidate");

var router = express.Router();

router.post("/add-to-cart", cartValidate.saveCart, middleware.authenticateUser, cartMiddleware.checkProduct, cartController.addToCart);

router.get("/get-cart-details/:cart_id", middleware.authenticateUser, cartMiddleware.checkCartDetail, cartController.getCartData);

module.exports = router;