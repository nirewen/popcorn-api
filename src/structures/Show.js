import fetch from 'node-fetch';
import Constants from 'core/Constants';
import Episode from 'structures/Episode';
import Season from 'structures/Season';

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
        let res = await fetch(Constantes.details({id: this.id})).then(r => r.json());

        this.status = res.status;
        this.synopsis = res.synopsis;
        this.runtime = res.runtime;
        this.country = res.country;
        this.network = res.network;
        this.air_day = res.air_day;
        this.air_time = res.air_time;
        this.last_updated = res.last_updated;
        this.episodes = res.episodes.map(e => new Episode(e));
        for (let number = 1; number <= this.num_seasons; number++)
            this.seasons.push(new Season({
                number,
                episodes: this.episodes.filter(e => e.season == number)
            }));
        this.genres = res.genres;
        this.images = res.images;
        this.rating = res.rating;

        return this;
    }
}