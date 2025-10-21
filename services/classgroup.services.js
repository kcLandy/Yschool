const { Classgroup } = require('../models');
const BaseService = require('./BaseService');

class ClassgroupServices extends BaseService {
}

module.exports = new ClassgroupServices(Classgroup);
