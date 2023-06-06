const express = require('express')
const router = express.Router()

const genericRoutes = require('./genericRoutes')

const {
  ordersController,
  officesController,
  productsController,
  paymentsController,
  customersController,
  orderDetailsController,
  productsLineController
} = require("../controllers")

const employeesRouter = require('./employeesRoutes')
const ordersRouter = genericRoutes(ordersController)
const officesRouter = genericRoutes(officesController)
const productsRouter = genericRoutes(productsController)
const paymentsRouter = genericRoutes(paymentsController)
const customersRouter = genericRoutes(customersController)
const orderDetailsRouter = genericRoutes(orderDetailsController)
const productsLineRouter = genericRoutes(productsLineController)

router.use('/orders', ordersRouter)
router.use('/offices', officesRouter)
router.use('/products', productsRouter)
router.use('/payments', paymentsRouter)
router.use('/customers', customersRouter)
router.use('/employees', employeesRouter)
router.use('/orderdetails', orderDetailsRouter)
router.use('/productsLine', productsLineRouter)

module.exports = router