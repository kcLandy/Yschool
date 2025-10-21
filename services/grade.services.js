const { Grade } = require('../models');
const BaseService = require('./BaseService');

class GradeServices extends BaseService {
}

module.exports = new GradeServices(Grade);
