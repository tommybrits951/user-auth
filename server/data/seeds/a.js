/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('roles').truncate()
  await knex('roles').insert([
    {role_id: 1, role: 'worker'},
    {role_id: 2, role: 'manager'},
    {role_id: 3, role: 'owner'}
  ]);
};
