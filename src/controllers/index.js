const GenericController = require('../controllers/genericController')
const EmployeesController = require('./emplyeesController')

const { ordersRepository, officesRepository, employeesRepository, customersRepository } = require('../repositories')

const ordersController = new GenericController(ordersRepository, "orderNumber")
const officesController = new GenericController(officesRepository, "officeCode")
const employeesController = new EmployeesController(employeesRepository, "employeeNumber")
const customersController = new GenericController(customersRepository, "customerNumber")

module.exports = {
  ordersController,
  officesController,
  employeesController,
  customersController
}