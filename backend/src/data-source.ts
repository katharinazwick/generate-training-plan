import { DataSource } from "typeorm";
import { Unit } from "./unit/unit.entity.js";

// @ts-ignore
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 5432),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false, // niemals in Prod auf true
    logging: true,
    entities: [Unit],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
});
