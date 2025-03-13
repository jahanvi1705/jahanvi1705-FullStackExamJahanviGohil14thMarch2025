const { DataTypes } = require('sequelize');
const db = require("../config/mySqlConnection");
const UserModel = require('./userModel');

const Order = db.define('order', {
  order_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  shipping_address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  order_status: {
    type: DataTypes.ENUM('pending', 'shipped', 'delivered', 'cancelled'),
    defaultValue: 'pending',
  },
  placed_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Order;
