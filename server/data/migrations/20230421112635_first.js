/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('roles', tbl => {
    tbl.increments("role_id")
    tbl.string("role").notNullable()
  })
  .createTable('users', tbl => {
    tbl.increments('user_id')
    tbl.string('username').notNullable().unique()
    tbl.string('password').notNullable()
    tbl.string('email').notNullable()
    tbl.integer("role_id").unsigned().references('role_id').inTable('roles').defaultTo(1)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('roles')
};
