const { User } = require('../models');
const BaseService = require('./BaseService');

class UserServices extends BaseService {
}

module.exports = new UserServices(User);
