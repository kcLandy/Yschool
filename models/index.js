import dotenv from 'dotenv';
import {Sequelize} from "sequelize";
dotenv.config();

const {
    DB_HOST = 'localhost',
    DB_PORT = 3306,
    DB_NAME = 'yschool_db',
    DB_USER = 'root',
    DB_PASSWORD = 'root'
} = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
    logging: false
})

console.log(process.env.DB_HOST)

export async function initDB(){
    await sequelize.authenticate();
}