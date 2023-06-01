const express = require('express')

function genericRoutes(controller) {
  const router = express.Router()

  router.get('/', controller.getAll)
  router.get('/:pk', controller.getByPrimaryKey)
  router.post('/', controller.create)
  router.put('/:pk', controller.update)
  router.delete('/:pk', controller.delete)

  return router
}

module.exports = genericRoutes