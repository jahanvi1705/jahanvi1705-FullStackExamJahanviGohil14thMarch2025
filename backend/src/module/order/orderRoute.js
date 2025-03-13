const express = require("express");
const orderController = require("./orderController");
const middleWare = require("../../middleware");
const orderValidate = require("./orderValidate");
const productMiddleware = require("../product/productMiddleware");
const orderMiddleware = require("./orderMiddleware");

var router = express.Router();

router.post("/add-order", orderValidate.saveOrder, middleWare.authenticateUser, orderController.createOrder);

router.get("/get-all-order-details", middleWare.authenticateUser, orderController.getOrderDetails);

router.post("/add-order-item", orderValidate.saveOrderItem, middleWare.authenticateUser, orderMiddleware.checkOrder, orderMiddleware.checkProduct, orderController.addOrderItemDetails);

router.post("/get-all-order-item-details", orderValidate.getOrderItem,  middleWare.authenticateUser, orderController.getOrderItemDetails);


module.exports = router;