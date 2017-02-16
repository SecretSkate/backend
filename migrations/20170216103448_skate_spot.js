
exports.up = function(knex, Promise) {
  return knex.schema.createTable('skate_spot', function(table) {
    table.increments()
    table.text('name')
    table.decimal('lat', 9, 6).notNullable()
    table.decimal('lng', 9, 6).notNullable()
    table.integer('video_id').references('video.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('skate_spot')
};
