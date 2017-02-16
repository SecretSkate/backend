exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM skate_spot; ALTER SEQUENCE skate_spot_id_seq RESTART WITH 4;')
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('skate_spot').insert({
                    id: 1,
                    name: 'school four stair',
                    lat: 41.7576824,
                    lng: -105.00713929999999,
                    video_id: 1
                }),
                knex('skate_spot').insert({
                    id: 2,
                    name: 'short rail',
                    lat: 39.7576761,
                    lng: -107.00713929999999,
                    video_id: 2
                }),
                knex('skate_spot').insert({
                    id: 3,
                    name: 'gap',
                    lat: 39.7576761,
                    lng: -103.00713929999999,
                    video_id: 3
                })
            ]);
        });
};
