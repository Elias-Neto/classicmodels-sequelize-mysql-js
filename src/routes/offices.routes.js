const express = require('express')
const router = express.Router()

const officesController = require('../controllers/officesController')

router.get('/', officesController.getAllOffices)
router.get('/:officeCode', officesController.getOfficeByOfficeCode)
router.post('/', officesController.createOffice)
router.put('/:officeCode', officesController.updateOffice)
router.delete('/:officeCode', officesController.deleteOffice)

module.exports = router