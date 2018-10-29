import Episode from 'structures/Episode';
import TorrentList from 'structures/TorrentList';

export default class TVEpisode extends Episode {
    _patch(data) {
        this.tvdbID = data.tvdb_id;
        this.id = this.tvdbID;
        this.firstAiredTimestamp = data.first_aired * 1000;
        this.dateBased = data.date_based;
        this.overview = data.overview;
        this.episode = data.episode;
        this.season = data.season;
        this.torrents = new TorrentList(data.torrents);
    }

    get firstAiredAt() {
        return this.firstAiredTimestamp ? new Date(this.firstAiredTimestamp) : null
    }
}
