import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("pix_keys", (table) => {
        table.uuid("id").primary();
        table.string("key", 255).notNullable();
        table.string("type", 255).notNullable();
        table.integer("cpf").notNullable().unique();
        table.uuid("account_id").references("id").inTable("accounts");
        table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("pix_keys");
}

