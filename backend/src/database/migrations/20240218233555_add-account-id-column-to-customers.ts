import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable("customers", (table) => {
        table.uuid("account_id")
            .references("id").inTable("accounts")
            .after("birth_date");
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable("customers", (table) => {
        table.dropColumn("account_id");
    })
}

