
import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

let pool;

export const connection = async () => {
  if (!pool) {
    try {
      pool = createPool({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
        connectionLimit: process.env.DB_CONNECTION_LIMIT ? parseInt(process.env.DB_CONNECTION_LIMIT) : 10,
      });
      console.log("✅ MySQL connected!");
    } catch (error) {
      console.error("❌ MySQL connection failed:", error);
      throw error;
    }
  }
  return pool;
};
