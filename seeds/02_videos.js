exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM video; ALTER SEQUENCE video_id_seq RESTART WITH 4;')
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('video').insert({
                    id: 1,
                    title: "Pretty Hate Machine",
                    skater_id: 3,
                    video_url: "",
                    points: 4,
                    comments: "cool!",
                    date: new Date()
                }),
                knex('video').insert({
                    id: 2,
                    title: "grindy grind",
                    skater_id: 2,
                    video_url: "",
                    points: 5,
                    comments: "wicked!",
                    date: new Date()
                }),
                knex('video').insert({
                    id: 3,
                    title: "gap",
                    skater_id: 2,
                    video_url: "",
                    points: 5,
                    comments: "GNAR!",
                    date: new Date()
                })
            ]);
        });
};
