import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http"
import { config } from "dotenv";

config({ path: ".env" });

neonConfig.fetchConnectionCache = true;

if (!process.env.DATABASE_URI) {
    throw new Error("Database url is not defined");
}

const sql = neon(process.env.DATABASE_URI!);

export const db = drizzle(sql);