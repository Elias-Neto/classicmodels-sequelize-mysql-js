class GenericController {
  constructor(repository, primaryKeyName) {
    this.repository = repository
    this.primaryKeyName = primaryKeyName
  }

  getAll = async (req, res) => {
    const result = await this.repository.getAll()
    return res.json(result)
  }

  getByPrimaryKey = async (req, res) => {
    const result = await this.repository.getByPrimaryKey(req.params.pk)
    return res.json(result)
  }

  create = async (req, res) => {
    const result = await this.repository.create(req.body)
    return res.json(result)
  }

  update = async (req, res) => {
    await this.repository.update(this.primaryKeyName, req.params.pk, req.body)
    return res.json({ message: 'Record updated successfully' })
  }

  delete = async (req, res) => {
    await this.repository.delete(this.primaryKeyName, req.params.pk)
    return res.json({ message: 'Record deleted successfully' })
  }
}

module.exports = GenericController