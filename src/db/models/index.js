'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

const config = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'school_api_dev',
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: process.env.DB_DIALECT || 'mysql'
};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Course = require('./course')(sequelize, Sequelize);
db.Enrollment = require('./enrollment')(sequelize, Sequelize);
db.Grade = require('./grade')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

// associations
db.User.hasMany(db.Course, { foreignKey: 'teacherId', as: 'courses' });
db.Course.belongsTo(db.User, { foreignKey: 'teacherId', as: 'teacher' });

db.Course.hasMany(db.Enrollment, { foreignKey: 'courseId', as: 'enrollments' });
db.Enrollment.belongsTo(db.Course, { foreignKey: 'courseId' });

db.User.hasMany(db.Enrollment, { foreignKey: 'studentId', as: 'enrollments' });
db.Enrollment.belongsTo(db.User, { foreignKey: 'studentId', as: 'student' });

db.Enrollment.hasMany(db.Grade, { foreignKey: 'enrollmentId', as: 'grades' });
db.Grade.belongsTo(db.Enrollment, { foreignKey: 'enrollmentId' });

db.Course.hasMany(db.Comment, { foreignKey: 'courseId', as: 'comments' });
db.Comment.belongsTo(db.Course, { foreignKey: 'courseId' });
db.Comment.belongsTo(db.User, { foreignKey: 'authorId', as: 'author' });

module.exports = db;
