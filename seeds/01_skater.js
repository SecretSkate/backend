const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM skater; ALTER SEQUENCE skater_id_seq RESTART WITH 5;')
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('skater').insert({
                    id: 1,
                    first_name: 'Michael',
                    last_name: 'Roque',
                    username: 'ChocoTaco',
                    password: bcrypt.hashSync('tunaTostada38'),
                    date_joined: new Date()
                }),
                knex('skater').insert({
                    id: 2,
                    first_name: 'Chana',
                    last_name: 'Reynolds',
                    username: 'ChanaBanana',
                    password: bcrypt.hashSync('chanaBanana38'),
                    date_joined: new Date()
                }),
                knex('skater').insert({
                    id: 3,
                    first_name: 'Phil',
                    last_name: 'Cunnell',
                    username: 'Philthy',
                    password: bcrypt.hashSync('cactusCooler38'),
                    date_joined: new Date()
                }),
                knex('skater').insert({
                    id: 4,
                    first_name: 'Luke',
                    last_name: 'McCrae',
                    username: 'McCraeCray',
                    password: bcrypt.hashSync('lankyLuke38'),
                    date_joined: new Date()
                })
            ]);
        });
};
