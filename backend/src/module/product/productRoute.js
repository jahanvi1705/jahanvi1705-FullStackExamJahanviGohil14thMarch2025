const express = require("express");
const productController = require("./productController");
const productValidate = require("./productValidate");
const middleWare = require("../../middleware");
const productMiddleware = require("./productMiddleware");

var router = express.Router();

router.post("/create-product", middleWare.authenticateUser, productValidate.createProduct, productController.createProduct);

router.get("/get-product/:prod_id", middleWare.authenticateUser, productMiddleware.checkProduct, productController.getProduct);

router.get("/get-all-product", middleWare.authenticateUser, productController.getAllProduct);

router.put("/edit-product-details/:prod_id", middleWare.authenticateUser,  productMiddleware.checkProduct, productController.editProductDetails);

router.delete("/delete-product/:prod_id", middleWare.authenticateUser,  productMiddleware.checkProduct, productController.deleteProduct);


module.exports = router;
