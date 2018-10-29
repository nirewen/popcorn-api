import TorrentList from 'structures/TorrentList';

export default class Movie {
    constructor(data) {
        this.id = data._id;
        this.imdb_id = data.imdb_id;
        this.title = data.title;
        this.year = data.year;
        this.synopsis = data.synopsis;
        this.runtime = data.runtime;
        this.released = new Date(data.released);
        this.certification = data.certification;
        this.trailer = data.trailer;
        this.genres = data.genres;
        this.images = data.images;
        this.rating = data.rating;
        this.torrents = {};
        for (let torrent in data.torrents)
            this.torrents[torrent] = new TorrentList(data.torrents[torrent]);
    }
}