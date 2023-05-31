const sequelize = require('../config/sequelize')
const { DataTypes } = require('sequelize')

const employeesModel = sequelize.define('employees', {
  employeeNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  lastName: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  extension: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  officeCode: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  reportsTo: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  jobTitle: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'employees',
  timestamps: true,
})

module.exports = employeesModel