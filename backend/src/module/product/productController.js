const Constant = require("../../config/constant");
const productService = require("./productService");

module.exports = {
    //Create product
    createProduct : async(req, res) => {
         try{
            const {name, description, price, stock_quantity, category} = req.body;
            const productDetails = {
                name : name,
                description : description,
                price : price,
                stock_quantity : stock_quantity,
                category : category
            }
            const result = await productService.saveProduct(productDetails);
            if(result){
                return res.status(Constant.SUCCESS_CODE).json({code : Constant.SUCCESS_CODE, data : result, message : "Product add successfully"});
            }else{
                return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, message : "Failed"});
            }
        }catch(error){
            return res.status(Constant.INTERNAL_SERVER_ERR).json({code : Constant.INTERNAL_SERVER_ERR, message : error.message});
        }
    },

    //Get Product
    getProduct : async(req, res) => {
        try{
            const product = req.product;
            if(product){
                return res.status(Constant.SUCCESS_CODE).json({code : Constant.SUCCESS_CODE, data : product, message : "Product details get successfully"});
            }else{
                return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, message : "Failed"});
            }
        }catch(error){
            return res.status(Constant.INTERNAL_SERVER_ERR).json({code : Constant.INTERNAL_SERVER_ERR, message : error.message});
        }
    },

    //Get All Product
    getAllProduct : async(req, res) => {
        try{
            const product = await productService.getAllProduct();
            if(product){
                return res.status(Constant.SUCCESS_CODE).json({code : Constant.SUCCESS_CODE, data : product, message : "Product details get successfully"});
            }else{
                return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, message : "Failed"});
            }
        }catch(error){
            return res.status(Constant.INTERNAL_SERVER_ERR).json({code : Constant.INTERNAL_SERVER_ERR, message : error.message});
        }
    },

    //Edit product details
    editProductDetails : async(req, res)=> {
        try{
            const product = req.product;
            const {name, description, price, stock_quantity, category} = req.body;
            const productDetails = {
                name : name,
                description : description,
                price : price,
                stock_quantity : stock_quantity,
                category : category
            }
            const result = await productService.updateProductDetails(product._id, productDetails);
            if(result){
                return res.status(Constant.SUCCESS_CODE).json({code : Constant.SUCCESS_CODE, data : result, message : "Product details edit successfully"});
            }else{
                return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, message : "Failed"});
            }
        }catch(error){
            return res.status(Constant.INTERNAL_SERVER_ERR).json({code : Constant.INTERNAL_SERVER_ERR, message : error.message});
        }
    },

    //Delete Product
    deleteProduct : async(req, res)=> {
        try{
            const product = req.product;
            const deleteProd = await productService.deleteProduct(product._id);
            if(deleteProd){
                return res.status(Constant.SUCCESS_CODE).json({code : Constant.SUCCESS_CODE, message : "Product details delete successfully"});
            }else{
                return res.status(Constant.BAD_REQUEST).json({code : Constant.BAD_REQUEST, message : "Failed"});
            }
        }catch(error){
            return res.status(Constant.INTERNAL_SERVER_ERR).json({code : Constant.INTERNAL_SERVER_ERR, message : error.message});
        }
    }

}