const { DataTypes } = require('sequelize');
const db = require("../config/mySqlConnection");
const UserModel = require('./userModel');

const Cart = db.define('cart', {
  cart_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  added_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  product_id: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
});

// Cart.belongsTo(UserModel, { foreignKey: 'user_id' });

module.exports = Cart;
