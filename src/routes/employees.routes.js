const express = require('express')
const router = express.Router()

const employeesController = require('../controllers/employeesController')

router.get('/', employeesController.getAllEmployees)
router.get('/:employeeNumber', employeesController.getEmployeeByEmployeeNumber)
router.post('/', employeesController.createEmployee)
router.put('/:employeeNumber', employeesController.updateEmployee)
router.delete('/:employeeNumber', employeesController.deleteEmployee)

module.exports = router