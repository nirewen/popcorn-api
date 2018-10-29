import TorrentList from 'structures/TorrentList';

export default class Episode {
    constructor(data) {
        this._patch(data);
    }

    _patch(data) {
        this.tvdbID = data.tvdb_id;
        this.id = data.id || this.tvdbID;
        this.title = data.title;
        this.episode = data.episode;
        this.season = data.season;
        this.overview = data.overview;
        this.firstAiredTimestamp = data.first_aired;
        this.dateBased = data.date_based;
        this.torrents = new TorrentList(data.torrents);
    }

    get firstAiredAt() {
        return this.firstAiredTimestamp ? new Date(this.firstAiredTimestamp) : null
    }
}
