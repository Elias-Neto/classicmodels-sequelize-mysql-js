const EmployeesController = require('./emplyeesController')
const GenericController = require('../controllers/genericController')

const {
  ordersRepository,
  officesRepository,
  productsRepository,
  paymentsRepository,
  customersRepository,
  employeesRepository,
  orderDetailsRepository,
  productsLineRepository
} = require('../repositories')

const ordersController = new GenericController(ordersRepository)
const officesController = new GenericController(officesRepository)
const productsController = new GenericController(productsRepository)
const paymentsController = new GenericController(paymentsRepository)
const customersController = new GenericController(customersRepository)
const employeesController = new EmployeesController(employeesRepository)
const orderDetailsController = new GenericController(orderDetailsRepository)
const productsLineController = new GenericController(productsLineRepository)

module.exports = {
  ordersController,
  officesController,
  productsController,
  paymentsController,
  customersController,
  employeesController,
  orderDetailsController,
  productsLineController
}