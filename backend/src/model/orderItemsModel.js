const { DataTypes } = require('sequelize');
const db = require("../config/mySqlConnection");
const Order = require('./orderModel');

const OrderItem = db.define('orderItem', {
  order_item_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  unit_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  product_id: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
});

OrderItem.belongsTo(Order, { foreignKey: 'order_id' });

module.exports = OrderItem;
