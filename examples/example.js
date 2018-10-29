const PopCorn = require('../');

// * Search for Animes using query "akame"
PopCorn.search({tab: 'animes', query: 'akame'})
    .then(async ([anime]) => {
        await anime.fetch();

        console.log(anime);
    });

// * Search for TV Shows using query "flash"
PopCorn.search({tab: 'shows', query: 'flash'})
    .then(([show]) => show.fetch())
    .then(console.log);

// * Search for Movies using query "darko"
PopCorn.search({tab: 'movies', query: 'darko'})
    .then(async ([movie]) => {
        console.log(movie);
    });

// * Get the number of pages of a tab
PopCorn.pages()
    .then(console.log);

// * Get details of a movie from ID 'tt2250912'
PopCorn.details({tab: 'movie', id: 'tt2250912'})
    .then(console.log);

// * Get a random result from 'anime' tab
PopCorn.random('anime')
    .then(console.log);