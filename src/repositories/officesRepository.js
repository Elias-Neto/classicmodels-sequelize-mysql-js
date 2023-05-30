const officeModel = require('../models/officesModel')

const getAllOffices = async () => {
  const offices = await officeModel.findAll()
  return offices
}

const getOfficeByOfficeCode = async (officeCode) => {
  const office = await officeModel.findByPk(officeCode)
  return office
}

const createOffice = async (office) => {
  const newOffice = await officeModel.create(office)
  return newOffice
}

const updateOffice = async (officeCode, office) => {
  const updatedOffice = await officeModel.update(office, {
    where: {
      officeCode: officeCode
    }
  })
  return updatedOffice
}

const deleteOffice = async (officeCode) => {
  const deletedOffice = await officeModel.destroy({
    where: {
      officeCode: officeCode
    }
  })
}

module.exports = {
  getAllOffices,
  getOfficeByOfficeCode,
  createOffice,
  updateOffice,
  deleteOffice
}