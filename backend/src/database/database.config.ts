
import knexSetup from "knex";
import { env } from "../env";

export const config = {
    client: 'sqlite3',
    connection: {
        filename: env.DATABASE_URL
    },
    useNullAsDefault: true,
    migrations: {
        extension: "ts",
        directory: './src/database/migrations',
    }
}

export const knex = knexSetup(config);
