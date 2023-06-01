class GenericRepository {
  constructor(model) {
    this.model = model;
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

  async update(primaryKeyName, pk, data) {
    await this.model.update(data, { where: { [primaryKeyName]: pk } })
    return await this.getByPrimaryKey(pk)
  }

  async delete(primaryKeyName, pk) {
    await this.getByPrimaryKey(pk)
    return await this.model.destroy({ where: { [primaryKeyName]: pk } })
  }
}

module.exports = GenericRepository