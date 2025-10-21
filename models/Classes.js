import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index.js';

export class Classes extends Model {}

Classes.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false,
      unique: { msg: "Le nom de la classe doit être unique." },
      validate: {
        notEmpty: { msg: "Le nom de la classe ne peut être vide." },
      },
    },
  },
  { sequelize, tableName: 'classes', modelName: 'Classes', timestamps: true, underscored: true }
);

export default Classes;
