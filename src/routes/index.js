const express = require('express')
const router = express.Router()

const officesRouter = require('./offices.routes')
const employeesRouter = require('./employees.routes')

router.use('/offices', officesRouter)
router.use('/employees', employeesRouter)

module.exports = router