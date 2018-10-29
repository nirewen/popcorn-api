import Torrent from 'structures/Torrent';

export default class Episode {
    constructor(data) {
        this.first_aired = data.first_aired;
        this.date_based = data.date_based;
        this.overview = data.overview;
        this.title = data.title;
        this.episode = data.episode;
        this.season = data.season;
        this.tvdb_id = data.tvdb_id;
        this.torrents = new Torrent(data.torrents);
    }
}