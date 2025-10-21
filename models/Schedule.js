import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index.js';

export class Schedule extends Model {}

Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    subjectId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    teacherId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    classId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    roomNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { sequelize, tableName: 'schedules', modelName: 'Schedule', timestamps: true, underscored: true }
);

export default Schedule;
