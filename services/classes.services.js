const { Classes } = require('../models');
const BaseService = require('./BaseService');

class ClassesService extends BaseService {
}

module.exports = new ClassesService(Classes);
