
const orderModel = require("../../model/orderModel");
const UserModel = require("../../model/userModel");
const orderItemModel = require("../../model/orderItemsModel");
const Product = require("../../model/productSchema");
const Order = require("../../model/orderModel");
const { Op } = require('sequelize');

module.exports = {
    //Save user Order
    saveOrder : async(orderDetails)=>{
        const order = await orderModel.create(orderDetails);
        return order;
    },

    //Get User's order details
    getAllOrderDetails : async(userId) => {
        const order = await orderModel.findAll({
            include: [
                {
                  model: UserModel
                }
            ]
        });
        return order;
    },

    //Save Order Item
    saveOrderItem : async(orderDetails)=>{
        const orderItem = await orderItemModel.create(orderDetails);
        return orderItem;
    },

    //Get User's order details
    getAllOrderItemDetails : async(page = 1, limit = 10, most_recent) => {
        const offset = (page - 1) * limit;

        let filterRecord = {};
        let orderBy = 'ASC';
        if(most_recent === "true"){
            filterRecord.createdAt = {
                [Op.lt]: new Date(),
            }
            orderBy = 'DESC';
        }

        const orderItem = await orderItemModel.findAll({
            where : filterRecord,
            include: [
                {
                  model: Order,
                  include : {
                    model : UserModel,
                    attributes : ['id', 'first_name', 'last_name', 'email']
                  }
                }
            ],
            limit : limit,
            offset : offset,    
            raw : true,
            order : [['createdAt', orderBy]]
        });
 
        const productIds = [...new Set(orderItem.map(item => item.product_id))];

        // query for get all product details
        const products = await Product.find({ _id: { $in: productIds } });

        const productMap = products.reduce((acc, product) => {
            acc[product._id] = product;
            return acc;
            }, {});

            for (let item of orderItem) {
            const product = productMap[item.product_id];
            if (product) {
                item.product = product;
            } else {
                item.product = null;
            }
        }
        return orderItem;
    }
}