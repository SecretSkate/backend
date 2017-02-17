exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM skate_spot; ALTER SEQUENCE skate_spot_id_seq RESTART WITH 13;')
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('skate_spot').insert({
                    id: 1,
                    name: 'Badass',
                    lat: 39.757648,
                    lng: -105.007168,
                    video_id: 4
                }),
                knex('skate_spot').insert({
                    id: 2,
                    name: 'short rail',
                    lat: 39.7576761,
                    lng: -107.00713929999999,
                    video_id: 5
                }),
                knex('skate_spot').insert({
                    id: 3,
                    name: 'Burrito',
                    lat: 39.7576761,
                    lng: -103.00713929999999,
                    video_id: 6
                }),
                knex('skate_spot').insert({
                    id: 4,
                    name: 'school 12 stair',
                    lat: 39.757648,
                    lng: -105.007168,
                    video_id: 7
                }),
                knex('skate_spot').insert({
                    id: 5,
                    name: 'Whaaaaa',
                    lat: 39.7576761,
                    lng: -107.00713929999999,
                    video_id: 8
                }),
                knex('skate_spot').insert({
                    id: 6,
                    name: 'Brooooo',
                    lat: 39.7576761,
                    lng: -103.00713929999999,
                    video_id: 9
                }),
                knex('skate_spot').insert({
                    id: 7,
                    name: 'school four stair',
                    lat: 39.757648,
                    lng: -105.007168,
                    video_id: 10
                }),
                knex('skate_spot').insert({
                    id: 8,
                    name: 'short rail',
                    lat: 39.7576761,
                    lng: -107.00713929999999,
                    video_id: 11
                }),
                knex('skate_spot').insert({
                    id: 9,
                    name: 'Great Spot',
                    lat: 39.7576761,
                    lng: -103.00713929999999,
                    video_id: 12
                }),
                knex('skate_spot').insert({
                    id: 10,
                    name: 'Christ Air',
                    lat: 39.7576761,
                    lng: -103.00713929999999,
                    video_id: 13
                }),
                knex('skate_spot').insert({
                    id: 11,
                    name: '900',
                    lat: 39.7576761,
                    lng: -103.00713929999999,
                    video_id: 14
                }),
                knex('skate_spot').insert({
                    id: 12,
                    name: '5050',
                    lat: 39.7576761,
                    lng: -103.00713929999999,
                    video_id: 15
                })
            ]);
        });
};
