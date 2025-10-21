import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index.js';

export class Subject extends Model {}

Subject.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Le nom de la matière ne peut être vide." },
      },
    },
  },
  { sequelize, tableName: 'subjects', modelName: 'Subject', timestamps: true, underscored: true }
);

export default Subject;
