import fetch from 'node-fetch';
import AnimeEpisode from 'structures/AnimeEpisode';
import Season from 'structures/Season';
import * as Constants from 'core/Constants';

export default class Anime {
    constructor(routeController, data) {
        this.routeController = routeController;
        Object.defineProperty(this, 'routeController', { enumerable: false });

        if (data) this._patch(data);
    }

    _patch(data) {
        this.id = data._id;
        this.malID = data.mal_id;
        this.title = data.title;
        this.year = data.year;
        this.slug = data.slug;
        this.type = data.type;
        this.genres = data.genres;
        this.images = data.images;
        this.rating = data.rating;
        this.numSeasons = data.num_seasons;

        if (data.details) {
            this.synopsis = data.synopsis;
            this.status = data.status;
            this.lastUpdatedTimestamp = data.last_updated;

            this.episodes = data.episodes.map(e => new AnimeEpisode(e));
            for (let number = 1; number <= this.numSeasons; number++)
                this.seasons.push(new Season({
                    number,
                    episodes: this.episodes.filter(e => e.season == number)
                }));
        } else {
            this.episodes = [];
            this.seasons = [];
        }

        return this;
    }

    async fetch() {
        const data = await this.routeController._rawDetails(this);
        return this._patch(data);
    }

    get lastUpdatedAt() {
        return this.lastUpdatedTimestamp ? new Date(this.lastUpdatedTimestamp) : null
    }
}
