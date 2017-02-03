
exports.up = function(knex, Promise) {
  return knex.schema.createTable('video', function(table) {
    table.increments()
    table.text('title')
    table.text('video_url').notNullable()
    table.text('location').notNullable()
    table.text('comments')
    table.integer('likes')
    table.integer('skater_id').references('skater.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('video')
};
