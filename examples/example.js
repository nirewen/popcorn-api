const PopCorn = require('../');

// * Search for Animes using query "akame"
PopCorn.animes.search({query: 'akame'})
    .then(async ([anime]) => {
        await anime.fetch();

        console.log(anime);
    });

// * Search for TV Shows using query "flash"
PopCorn.shows.search({query: 'flash'})
    .then(([show]) => show.fetch())
    .then(console.log);

// * Search for Movies using query "darko"
PopCorn.movies.search({query: 'darko'})
    .then(([movie]) => {
        console.log(movie);
    });
