const sequelize = require('./sequelize')

// Models

const officeModel = require('../models/officesModel')
const employeeModel = require('../models/employeesModel')

// Realtionships

officeModel.hasMany(employeeModel, { foreignKey: 'officeCode' })
employeeModel.belongsTo(officeModel, { foreignKey: 'officeCode' })

sequelize.sync({ force: true })