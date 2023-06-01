const express = require('express')
const router = express.Router()

const genericRoutes = require('./genericRoutes')

const { employeesController } = require("../controllers")

router.use('/', genericRoutes(employeesController))
router.use('/email/:email', employeesController.getByEmail)

module.exports = router