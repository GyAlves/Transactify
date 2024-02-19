import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("accounts", (table) => {
        table.uuid("id").primary();
        table.integer("account_number").notNullable();
        table.string("account_type", 255).notNullable();
        table.decimal("balance_amount", 10, 2).notNullable();
        table.integer("credit_limit").notNullable();
        table.string("currency").notNullable();
        table.uuid("customer_id").references("id").inTable("customers");
        table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("accounts");
}

