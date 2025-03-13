const { DataTypes } = require('sequelize');
const db = require("../config/mySqlConnection");

const Report = db.define('report', {
  report_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  report_type: {
    type: DataTypes.ENUM('sales', 'inventory', 'user_activity', 'custom'),
    allowNull: false,
  },
  report_data: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Report;
