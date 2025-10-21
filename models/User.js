import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index.js';

export class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Le nom ne peut être vide." },
      },
    },
    email: {
      type: DataTypes.STRING(120),
      allowNull: false,
      unique: { msg: "Cet email est déjà utilisé." },
      validate: {
        isEmail: { msg: "Email invalide." },
      },
    },
    passwordHash: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'teacher', 'student'),
      allowNull: false,
      defaultValue: 'student',
    },
  },
  { sequelize, tableName: 'users', modelName: 'User', timestamps: true, underscored: true }
);

export default User;
