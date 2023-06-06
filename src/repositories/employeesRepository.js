const GenericRepository = require('./genericRepository')

class EmployeesRepository extends GenericRepository {
  constructor(model, pkName) {
    super(model, pkName)
    this.model = model
  }

  getByEmail = async (email) => {
    const result = await this.model.findOne({ where: { email } })

    if (!result) {
      throw { status: 404, message: "Resource not found" }
    }

    return result
  }
}

module.exports = EmployeesRepository