const { Schedule } = require('../models');
const BaseService = require('./BaseService');

class ScheduleServices extends BaseService {
}

module.exports = new ScheduleServices(Schedule);
