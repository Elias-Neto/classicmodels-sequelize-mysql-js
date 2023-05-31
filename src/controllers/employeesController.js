const employeesRepository = require('../repositories/employeesRepository')

const getAllEmployees = async (req, res) => {
  const employees = await employeesRepository.getAllEmployees()
  return res.json(employees)
}

const getEmployeeByEmployeeNumber = async (req, res) => {
  const employees = await employeesRepository.getEmployeeByEmployeeNumber(req.params.employeeNumber)
  return res.json(employees)
}

const createEmployee = async (req, res) => {
  const employee = await employeesRepository.createEmployee(req.body)
  return res.json(employee)
}

const updateEmployee = async (req, res) => {
  const employee = await employeesRepository.updateEmployee(req.params.employeeNumber, req.body)
  return res.json({ message: 'Employee updated successfully' })
}

const deleteEmployee = async (req, res) => {
  const employee = await employeesRepository.deleteEmployee(req.params.employeeNumber)
  return res.json({ message: 'Employee deleted successfully' })
}

module.exports = {
  getAllEmployees,
  getEmployeeByEmployeeNumber,
  createEmployee,
  updateEmployee,
  deleteEmployee
}