const { DataTypes } = require("sequelize");
const db = require("../config/mySqlConnection");
const Order = require('./orderModel');
const Cart = require("./cartModel");

const UserModel = db.define('users', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    }
})

UserModel.hasMany(Order, { foreignKey: 'order_id' });
Order.belongsTo(UserModel, { foreignKey : 'user_id'})

UserModel.hasMany(Cart, { foreignKey: 'cart_id' });
Cart.belongsTo(UserModel, { foreignKey : 'user_id'})


module.exports = UserModel;