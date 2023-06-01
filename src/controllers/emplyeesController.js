const GenericController = require('./genericController')

class EmployeesController extends GenericController {
  constructor(repository) {
    super(repository)
    this.repository = repository
  }

  getByEmail = async (req, res) => {
    const result = await this.repository.getByEmail(req.params.email)
    return res.json(result)
  }
}

module.exports = EmployeesController