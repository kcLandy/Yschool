'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Grade.init({
    id: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER,
    value: DataTypes.DECIMAL,
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Grade',
  });
  return Grade;
};