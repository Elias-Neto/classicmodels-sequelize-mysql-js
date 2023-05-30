const express = require('express')
const router = express.Router()

const officesController = require('../controllers/officesController')

router.get('/', officesController.getAllOffices)
router.get('/:id', officesController.getOfficeByOfficeCode)
router.post('/', officesController.createOffice)
router.put('/:id', officesController.updateOffice)
router.delete('/:id', officesController.deleteOffice)

module.exports = router