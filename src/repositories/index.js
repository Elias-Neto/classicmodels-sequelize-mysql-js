const GenericRepository = require('./genericRepository')
const EmployeesRepository = require('./employeesRepository')

const ordersModel = require('../models/ordersModel')
const officesModel = require('../models/officesModel')
const employeesModel = require('../models/employeesModel')
const customersModel = require('../models/customersModel')

const ordersRepository = new GenericRepository(ordersModel)
const officesRepository = new GenericRepository(officesModel)
const customersRepository = new GenericRepository(customersModel)
const employeesRepository = new EmployeesRepository(employeesModel)

module.exports = {
  ordersRepository,
  officesRepository,
  employeesRepository,
  customersRepository
}