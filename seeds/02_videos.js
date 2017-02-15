exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM video; ALTER SEQUENCE video_id_seq RESTART WITH 3;')
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('video').insert({
                    id: 1,
                    title: "Pretty Hate Machine",
                    skater_id: 3,
                    video_url: "",
                    likes: 4,
                    comments: "cool!",
                    lat: 39.7576824,
                    lng: -105.02113929999999
                }),
                knex('video').insert({
                    id: 2,
                    title: "grindy grind",
                    skater_id: 2,
                    video_url: "",
                    likes: 5,
                    comments: "wicked!",
                    lat: 39.7576834,
                    lng: -105.02113969999999
                })
            ]);
        });
};
