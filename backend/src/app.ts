import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source.js";

const app = express();
app.use(express.json());

const startServer = async (): Promise<void> => {
    try {
        await AppDataSource.initialize();
        console.log("✅ Data Source initialized!");

        app.get("/", (_req, res) => res.send("Backend läuft!"));

        app.listen(3000, () => {
            console.log("🚀 Server läuft auf http://localhost:3000");
        });
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error("❌ Error during Data Source initialization:", err.message);
        } else {
            console.error("❌ Unexpected error:", err);
        }
    }
};

startServer();
