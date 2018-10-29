const PopCorn = require('../');

PopCorn.search({keywords: 'flash'})
    .then(async ([show]) => {
        await show.fetch();

        console.log(show.seasons[0].episodes[0].title); // Pilot
    });