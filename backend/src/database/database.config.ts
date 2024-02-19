
import knexSetup from "knex";

export const config = {
    client: 'sqlite3',
    connection: {
        filename: "./tmp/database.sqlite"
    },
    useNullAsDefault: true,
    migrations: {
        extension: "ts",
        directory: './src/database/migrations',
    }
}

export const knex = knexSetup(config);
