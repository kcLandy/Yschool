import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index.js';

export class ClassesGroup extends Model {}

ClassesGroup.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    studentId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    classId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  { sequelize, tableName: 'classesGroup', modelName: 'ClassesGroup', timestamps: true, underscored: true }
);

export default ClassesGroup;
