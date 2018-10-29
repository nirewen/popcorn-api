import fetch from 'node-fetch';
import TVEpisode from 'structures/TVEpisode';
import Season from 'structures/Season';
import * as Constants from 'core/Constants';

export default class Show {
    constructor(routeController, data) {
        this.routeController = routeController;
        Object.defineProperty(this, 'routeController', { enumerable: false });

        if (data) this._patch(data);
    }

    _patch(data) {
        this.id = data._id;
        this.imdbID = data.imdb_id;
        this.tvdbID = data.tvdb_id;
        this.title = data.title;
        this.year = data.year;
        this.slug = data.slug;
        this.rating = data.rating;
        this.numSeasons = data.num_seasons;
        this.images = data.images;

        if (data.details) {
            this.status = data.status;
            this.synopsis = data.synopsis;
            this.runtime = data.runtime;
            this.country = data.country;
            this.network = data.network;
            this.airDay = data.air_day;
            this.airTime = data.air_time;
            this.lastUpdatedTimestamp = data.last_updated;
            this.genres = data.genres;
            this.images = data.images;
            this.rating = data.rating;

            this.episodes = data.episodes.map(e => new TVEpisode(e));
            for (let number = 1; number <= this.numSeasons; number++)
                this.seasons.push(new Season({
                    number,
                    episodes: this.episodes.filter(e => e.season == number)
                }));
        } else {
            this.episodes = [];
            this.seasons = [];
        }

        return this
    }

    async fetch() {
        const data = await this.routeController._rawDetails(this);
        return this._patch(data);
    }

    get lastUpdatedAt() {
        return this.lastUpdatedTimestamp ? new Date(this.lastUpdatedTimestamp) : null
    }
}
