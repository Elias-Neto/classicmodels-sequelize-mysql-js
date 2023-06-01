const sequelize = require('./sequelize')

// Models

const officeModel = require('../models/officesModel')
const employeeModel = require('../models/employeesModel')

// RELATIONSHIPS

// Office has Many Employees
officeModel.hasMany(employeeModel, { foreignKey: 'officeCode' })
employeeModel.belongsTo(officeModel, { foreignKey: 'officeCode' })

// Employee has Many Employees
employeeModel.hasMany(employeeModel, { foreignKey: 'reportsTo' })
employeeModel.belongsTo(employeeModel, { foreignKey: 'reportsTo' })

sequelize.sync({ force: true }) 