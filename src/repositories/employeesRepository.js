const employeeModel = require('../models/employeesModel')

const getAllEmployees = async () => {
  const employees = await employeeModel.findAll()
  return employees
}

const getEmployeeByEmployeeNumber = async (employeeNumber) => {
  const employee = await employeeModel.findByPk(employeeNumber)
  return employee
}

const createEmployee = async (employee) => {
  const newEmployee = await employeeModel.create(employee)
  return newEmployee
}

const updateEmployee = async (employeeNumber, employee) => {
  const updatedEmployee = await employeeModel.update(employee, {
    where: {
      employeeNumber: employeeNumber
    }
  })
  return updatedEmployee
}

const deleteEmployee = async (employeeNumber) => {
  await employeeModel.destroy({
    where: {
      employeeNumber: employeeNumber
    }
  })
}

module.exports = {
  getAllEmployees,
  getEmployeeByEmployeeNumber,
  createEmployee,
  updateEmployee,
  deleteEmployee
}