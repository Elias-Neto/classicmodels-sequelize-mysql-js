const sequelize = require('../config/sequelize')
const { DataTypes } = require('sequelize')

const productsModel = sequelize.define('products', {
  productCode: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  productName: {
    type: DataTypes.STRING(70),
    allowNull: false
  },
  productLine: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  productScale: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  productVendor: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  productDescription: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  quantityInStock: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  buyPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  MSRP: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'products'
})

module.exports = productsModel