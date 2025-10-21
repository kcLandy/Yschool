class BaseService {
  constructor(Model) {
    if (!Model) throw new Error('Model is required');
    this.Model = Model;
  }

  async create(data) {
    return this.Model.create(data);
  }

  async findAll(options = {}) {
    return this.Model.findAll(options);
  }

  async findById(id, options = {}) {
    return this.Model.findByPk(id, options);
  }

  async updateById(id, data, options = {}) {
    const instance = await this.Model.findByPk(id, options);
    if (!instance) return null;
    await instance.update(data, options);
    return instance;
  }

  async deleteById(id, options = {}) {
    const instance = await this.Model.findByPk(id, options);
    if (!instance) return false;
    await instance.destroy(options);
    return true;
  }
}

module.exports = BaseService;
