const GenericRepository = require('./genericRepository')
const EmployeesRepository = require('./employeesRepository')

const ordersModel = require('../models/ordersModel')
const officesModel = require('../models/officesModel')
const paymentsModel = require('../models/paymentsModel')
const productsModel = require('../models/productsModel')
const employeesModel = require('../models/employeesModel')
const customersModel = require('../models/customersModel')
const productsLineModel = require('../models/productLinesModel')
const orderDetailsModel = require('../models/orderDetailsModel')

const ordersRepository = new GenericRepository(ordersModel, "orderNumber")
const officesRepository = new GenericRepository(officesModel, "officeCode")
const productsRepository = new GenericRepository(productsModel, "productCode")
const paymentsRepository = new GenericRepository(paymentsModel, "customerNumber")
const customersRepository = new GenericRepository(customersModel, "customerNumber")
const employeesRepository = new EmployeesRepository(employeesModel, "employeeNumber")
const orderDetailsRepository = new GenericRepository(orderDetailsModel, "orderNumber")
const productsLineRepository = new GenericRepository(productsLineModel, "productLine")

module.exports = {
  ordersRepository,
  officesRepository,
  productsRepository,
  paymentsRepository,
  customersRepository,
  employeesRepository,
  orderDetailsRepository,
  productsLineRepository
}