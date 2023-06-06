const sequelize = require('../config/sequelize')
const { DataTypes } = require('sequelize')

const productLinesModel = sequelize.define('productLines', {
  productLine: {
    type: DataTypes.STRING(50),
    allowNull: false,
    primaryKey: true
  },
  textDescription: {
    type: DataTypes.STRING(4000),
    allowNull: true
  },
  htmlDescription: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  image: {
    type: DataTypes.BLOB,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'productLines'
})

module.exports = productLinesModel