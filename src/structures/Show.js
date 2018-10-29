import fetch from 'node-fetch';
import Episode from 'structures/Episode';
import Season from 'structures/Season';
import * as Constants from 'core/Constants';

export default class Show {
    constructor(data) {
        this.id = data._id;
        this.imdb_id = data.imdb_id;
        this.tvdb_id = data.tvdb_id;
        this.title = data.title;
        this.year = data.year;
        this.slug = data.slug;
        this.rating = data.rating;
        this.num_seasons = data.num_seasons;
        this.images = data.images;
        this.episodes = [];
        this.seasons = [];
    }

    async fetch() {
        let data = await fetch(Constants.details({id: this.id})).then(r => r.json());
        
        this.status = data.status;
        this.synopsis = data.synopsis;
        this.runtime = data.runtime;
        this.country = data.country;
        this.network = data.network;
        this.air_day = data.air_day;
        this.air_time = data.air_time;
        this.last_updated = new Date(data.last_updated);
        this.genres = data.genres;
        this.images = data.images;
        this.rating = data.rating;

        this.episodes = data.episodes.map(e => new Episode(e));
        for (let number = 1; number <= this.num_seasons; number++)
            this.seasons.push(new Season({
                number,
                episodes: this.episodes.filter(e => e.season == number)
            }));

        return this;
    }
}