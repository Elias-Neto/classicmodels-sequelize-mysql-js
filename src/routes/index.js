const express = require('express')
const router = express.Router()

const officesRouter = require('./offices.routes')

router.use('/offices', officesRouter)

module.exports = router