const database = require('../models');

class Services {
  constructor(modelName) {
    this.model = database[modelName];
  }

  async findAll() {
    return this.model.findAll();
  }

  async findById(id) {
    return this.model.findByPk(id);
  }

  async create(data) {
    return this.model.create(data);
  }

  async update(id, data) {
    const [affectedRows] = await this.model.update(data, { where: { id: id } });
    return Boolean(affectedRows);
  }

  async upsert(id, data) {
    const [upsertedRow] = await this.model.upsert({ ...data, id: id });
    return upsertedRow;
  }

  async delete(id) {
    const affectedRows = this.model.destroy({ where: { id: id } });
    return Boolean(affectedRows);
  }
}

module.exports = Services;