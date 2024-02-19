import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("customers", (table) => {
        table.uuid("id").primary();
        table.string("first_name", 255).notNullable();
        table.string("last_name", 255).notNullable();
        table.string("email", 255).notNullable().unique();
        table.integer("cpf").notNullable().unique();
        table.date("birth_date").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("customers");
}

