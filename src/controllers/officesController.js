const officesRepository = require('../repositories/officesRepository')

const getAllOffices = async (req, res) => {
  const offices = await officesRepository.getAllOffices()
  return res.json(offices)
}

const getOfficeByOfficeCode = async (req, res) => {
  const office = await officesRepository.getOfficeByOfficeCode(req.params.id)
  return res.json(office)
}

const createOffice = async (req, res) => {
  const office = await officesRepository.createOffice(req.body)
  return res.json(office)
}

const updateOffice = async (req, res) => {
  const office = await officesRepository.updateOffice(req.params.id, req.body)
  return res.json({ message: 'Office updated successfully' })
}

const deleteOffice = async (req, res) => {
  const office = await officesRepository.deleteOffice(req.params.id)
  return res.json({ message: 'Office deleted successfully' })
}

module.exports = {
  getAllOffices,
  getOfficeByOfficeCode,
  createOffice,
  updateOffice,
  deleteOffice
}