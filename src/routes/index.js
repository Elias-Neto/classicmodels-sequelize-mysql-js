const express = require('express')
const router = express.Router()

const genericRoutes = require('./genericRoutes')

const { ordersController, officesController, customersController } = require("../controllers")

const employeesRouter = require('./employeesRoutes')
const ordersRouter = genericRoutes(ordersController)
const officesRouter = genericRoutes(officesController)
const customersRouter = genericRoutes(customersController)

router.use('/orders', ordersRouter)
router.use('/offices', officesRouter)
router.use('/employees', employeesRouter)
router.use('/customers', customersRouter)

module.exports = router