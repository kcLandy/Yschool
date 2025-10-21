import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index.js';

export class Grade extends Model {}

Grade.init(
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
    subjectId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    teacherId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    value: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
      validate: {
        min: { args: [0], msg: "La note doit être positive" },
        max: { args: [20], msg: "La note ne peut dépasser 20" },
      },
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { sequelize, tableName: 'grades', modelName: 'Grade', timestamps: true, underscored: true }
);

export default Grade;
