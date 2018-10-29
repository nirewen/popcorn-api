import Episode from 'structures/Episode';
import TorrentList from 'structures/TorrentList';

export default class TVEpisode extends Episode {
    constructor(data) {
        super(data);

        this.tvdb_id = data.tvdb_id;
        this.overview = data.overview;
        this.episode = data.episode;
        this.season = data.season;
        this.title = data.title;
        this.torrents = new TorrentList(data.torrents);
    }
}