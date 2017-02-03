
exports.up = function(knex, Promise) {
  return knex.schema.createTable('skater', function(table) {
    table.increments()
    table.text('first_name')
    table.text('last_name')
    table.text('username').unique().notNullable()
    table.text('password').notNullable()
    table.datetime('date_joined').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('skater')
};
