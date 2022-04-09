exports.up = async function (knex) {
  await knex.schema.createTable('temples', table => {
    table.increments('id').primary()
    table.string('title', 50).notNullable()
    table.text('description').notNullable()
    table.datetime('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    table.datetime('updatedAt').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
  })
  await knex('temples').insert([{
    title: 'BMR Lab\'s collection',
    description: 'All NFTs collected by BMR Lab\'s members'
  }])

  await knex.schema.createTable('nftslots', table => {
    table.increments('id').primary()
    table.integer('temple_id').unsigned().notNullable()
    table.foreign('temple_id').references('id').inTable('temples').onDelete('RESTRICT')
    table.string('slot_key', 50).notNullable()
    table.text('media_uri').notNullable()
    table.string('contract_address', 50).notNullable()
    table.string('token_id', 100).notNullable()
    table.datetime('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    table.datetime('updatedAt').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
  })
  await knex.schema.alterTable('nftslots', table => {
    table.unique(['temple_id', 'slot_key'], { indexName: 'nftslots_unique_index_temple_id_slot_key' })
  })
}

exports.down = async function (knex) {
  await knex.raw('DROP TABLE temples CASCADE')
  await knex.raw('DROP TABLE nftslots CASCADE')
}
