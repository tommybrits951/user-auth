const knex = require('knex')
const env = "development"
const config = require('../../knexfile')

module.exports = knex(config[env])