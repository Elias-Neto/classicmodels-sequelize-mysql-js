const sequelize = require('../config/sequelize')
const { DataTypes } = require('sequelize')

const ordersModel = sequelize.define('orders', {
  orderNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  orderDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  requiredDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  shippedDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING(15),
    allowNull: false,
    defaultValue: 'Pending'
  },
  comments: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  customerNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'orders',
  timestamps: false
})

module.exports = ordersModel