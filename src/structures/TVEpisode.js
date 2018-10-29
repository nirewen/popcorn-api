import Episode from 'structures/Episode';
import TorrentList from 'structures/TorrentList';

export default class TVEpisode extends Episode {
    constructor(data) {
        super(data);

        this.first_aired = data.first_aired;
        this.date_based = data.date_based;
        this.overview = data.overview;
        this.episode = data.episode;
        this.season = data.season;
        this.tvdb_id = data.tvdb_id;
        this.torrents = new TorrentList(data.torrents);
    }
}