import TorrentList from 'structures/TorrentList';

export default class Movie {
    constructor(routeController, data) {
        this.routeController = routeController;
        Object.defineProperty(this, 'routeController', { enumerable: false });

        if (data) this._patch(data);
    }

    _patch(data) {
        this.id = data._id;
        this.imdbID = data.imdb_id;
        this.title = data.title;
        this.year = data.year;
        this.synopsis = data.synopsis;
        this.runtime = data.runtime;
        this.releasedTimestamp = data.released * 1000;
        this.certification = data.certification;
        this.trailer = data.trailer;
        this.genres = data.genres;
        this.images = data.images;
        this.rating = data.rating;

        this.torrents = Object.entries(data.torrents).reduce((obj, [ lang, torrents ]) => {
            obj[lang] = new TorrentList(torrents);
            return obj;
        }, {})

        return this;
    }

    get releasedAt() {
        return this.releasedTimestamp ? new Date(this.releasedTimestamp) : null
    }
}
