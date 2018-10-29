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

// * Get the number of tv shows's pages
PopCorn.shows.pages()
    .then(console.log);

// * Get details of a movie from ID 'tt2250912'
PopCorn.movies.get({id: 'tt2250912'})
    .then(console.log);

// * Get a random result from 'anime' tab
PopCorn.animes.random()
    .then(console.log);
