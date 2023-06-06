class GenericRepository {
  constructor(model, pkName) {
    this.model = model
    this.pkName = pkName
  }

  async getAll() {
    return await this.model.findAll()
  }

  async getByPrimaryKey(pk) {
    const result = await this.model.findByPk(pk)

    if (!result) {
      throw { status: 404, message: "Resource not found" }
    }

    return result
  }

  async create(data) {
    return await this.model.create(data)
  }

  async update(pk, data) {
    await this.model.update(data, { where: { [this.pkName]: pk } })
    return await this.getByPrimaryKey(pk)
  }

  async delete(pk) {
    await this.getByPrimaryKey(pk)
    return await this.model.destroy({ where: { [this.pkName]: pk } })
  }
}

module.exports = GenericRepository