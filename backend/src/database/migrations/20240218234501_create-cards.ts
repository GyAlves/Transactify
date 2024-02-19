import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("cards", (table) => {
        table.uuid("id").primary();
        table.string("alias", 255).nullable();
        table.integer("card_number").notNullable();
        table.string("card_type", 255).notNullable();
        table.integer("security_code").notNullable();
        table.decimal("balance_amount", 10, 2).notNullable();
        table.string("card_status", 255).notNullable();
        table.uuid("account_id").references("id").inTable("accounts");
        table.date("expiration_date").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("cards");
}

