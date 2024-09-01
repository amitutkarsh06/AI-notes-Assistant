import { defineConfig } from 'drizzle-kit';
import { config } from "dotenv";

config({
    path: ".env"
});

export default defineConfig({
    dialect: "postgresql",
    out: './migrations',
    schema: "./src/lib/db/schema.ts",
    dbCredentials: {
        url: process.env.DATABASE_URI!,
    }
})