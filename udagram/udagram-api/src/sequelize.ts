import { Sequelize } from "sequelize-typescript";
//import { config } from "./config/config";
const url = process.env.POSTGRES_URL;
export const sequelize = new Sequelize(
    url
);
