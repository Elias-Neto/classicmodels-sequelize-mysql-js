const sequelize = require('../config/sequelize')
const { DataTypes } = require('sequelize')

const paymentsModel = sequelize.define('payments', {
  customerNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  checkNumber: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  paymentDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'payments'
})

module.exports = paymentsModel