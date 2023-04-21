/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    {username: 'tommy2', password: '$2a$08$t9nzqwgTRmyrMOPF8Sf5HO9C6vlpgrlzYLtBCOzT.52SLiO49W7/C', email: 'tommy@tommy.com', role_id: 3},
    {username: 'travis2', password: 'fucku', email: 'jimmy@tommy.com', role_id: 2},
    {username: 'reggie2', password: 'fuckthis', email: 'reggie@tommy.com', role_id: 1}
  ]);
};
