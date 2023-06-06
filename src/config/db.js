const sequelize = require('./sequelize')

const envIsDevelopment = process.env.NODE_ENV === 'development'

// Models

const ordersModel = require('../models/ordersModel')
const officesModel = require('../models/officesModel')
const paymentsModel = require('../models/paymentsModel')
const productsModel = require('../models/productsModel')
const employeesModel = require('../models/employeesModel')
const customersModel = require('../models/customersModel')
const productLinesModel = require('../models/productLinesModel')
const orderDetailsModel = require('../models/orderDetailsModel')

// RELATIONSHIPS

// Office has Many Employees
officesModel.hasMany(employeesModel, { foreignKey: 'officeCode', onUpdate: "NO ACTION", onDelete: "NO ACTION" })
employeesModel.belongsTo(officesModel, { foreignKey: 'officeCode', onUpdate: "NO ACTION", onDelete: "NO ACTION" })

// Employee has Many Employees
employeesModel.hasMany(employeesModel, { foreignKey: 'reportsTo', onUpdate: "NO ACTION", onDelete: "NO ACTION" })
employeesModel.belongsTo(employeesModel, { foreignKey: 'reportsTo', onUpdate: "NO ACTION", onDelete: "NO ACTION" })

// Employee has Many Customers
employeesModel.hasMany(customersModel, { foreignKey: 'salesRepEmployeeNumber', onUpdate: "NO ACTION", onDelete: "NO ACTION" })
customersModel.belongsTo(employeesModel, { foreignKey: 'salesRepEmployeeNumber', onUpdate: "NO ACTION", onDelete: "NO ACTION" })

// Customer has One Payments
customersModel.hasOne(paymentsModel, { foreignKey: 'customerNumber', onUpdate: "NO ACTION", onDelete: "NO ACTION" })
paymentsModel.belongsTo(customersModel, { foreignKey: 'customerNumber', onUpdate: "NO ACTION", onDelete: "NO ACTION" })

// Customer has Many Orders
customersModel.hasMany(ordersModel, { foreignKey: 'customerNumber', onUpdate: "NO ACTION", onDelete: "NO ACTION" })
ordersModel.belongsTo(customersModel, { foreignKey: 'customerNumber', onUpdate: "NO ACTION", onDelete: "NO ACTION" })

// ProductLine has Many Products
productLinesModel.hasMany(productsModel, { foreignKey: 'productLine', onUpdate: "NO ACTION", onDelete: "NO ACTION" })
productsModel.belongsTo(productLinesModel, { foreignKey: 'productLine', as: "productLineName", onUpdate: "NO ACTION", onDelete: "NO ACTION" })

// Product has Many Orders and Orders has Many Products
productsModel.belongsToMany(ordersModel, { through: orderDetailsModel, foreignKey: 'productCode', onUpdate: "NO ACTION", onDelete: "NO ACTION" })
ordersModel.belongsToMany(productsModel, { through: orderDetailsModel, foreignKey: 'orderNumber', onUpdate: "NO ACTION", onDelete: "NO ACTION" })

sequelize.sync({ force: envIsDevelopment }) 