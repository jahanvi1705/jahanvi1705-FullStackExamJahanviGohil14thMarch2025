const express = require("express");
const userController = require("./userController");
const userMiddleware = require("./userMiddleware");
const userValidate = require("./userValidate");
const middleware = require("../../middleware");

var router = express.Router();

router.post("/register", userValidate.register, userMiddleware.checkUserEmail, userController.Register);

router.post("/login", userValidate.login, userMiddleware.checkUser, userController.login);

router.get("/get-user-profile", middleware.authenticateUser, userController.getUserProfile);

module.exports = router;
