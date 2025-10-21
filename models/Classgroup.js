import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index.js';

export class ClassGroup extends Model {}

ClassGroup.init(
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
  { sequelize, tableName: 'classGroup', modelName: 'ClassGroup', timestamps: true, underscored: true }
);

export default ClassGroup;
