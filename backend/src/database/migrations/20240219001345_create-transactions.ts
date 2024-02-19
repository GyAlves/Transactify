import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("transactions", (table) => {
        table.uuid("id").primary();
        table.string("title", 255).notNullable();
        table.string("description", 255).notNullable();
        table.decimal("amount", 10, 2).notNullable();
        table.decimal("fee", 10, 2).notNullable();
        table.uuid("sender_id").references("id").inTable("accounts");
        table.uuid("receiver_id").references("id").inTable("accounts");
        table.string("transaction_type").notNullable();
        table.string("transaction_direction").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("transactions");
}

