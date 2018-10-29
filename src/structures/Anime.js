import fetch from 'node-fetch';
import Episode from 'structures/Episode';
import Season from 'structures/Season';
import * as Constants from 'core/Constants';

export default class Anime {
    constructor(data) {
        this.id = data._id;
        this.mal_id = data.mal_id;
        this.title = data.title;
        this.year = data.year;
        this.slug = data.slug;
        this.type = data.type;
        this.genres = data.genres;
        this.images = data.images;
        this.rating = data.rating;
        this.num_seasons = data.num_seasons;
        this.episodes = [];
        this.seasons = [];
    }

    async fetch() {
        let data = await fetch(Constants.details({tab: 'anime', id: this.id})).then(r => r.json());
        
        this.synopsis = data.synopsis;
        this.status = data.status;
        this.last_updated = new Date(data.last_updated);
        this.episodes = data.episodes;

        this.episodes = data.episodes.map(e => new Episode(e));
        for (let number = 1; number <= this.num_seasons; number++)
            this.seasons.push(new Season({
                number,
                episodes: this.episodes.filter(e => e.season == number)
            }));

        return this;
    }
}