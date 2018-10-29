import Episode from 'structures/Episode';
import TorrentList from 'structures/TorrentList';

export default class TVEpisode extends Episode {
    _patch(data) {
        this.tvdbID = data.tvdb_id;
        this.id = data.tvdb_id;
        this.overview = data.overview;
        this.episode = data.episode;
        this.season = data.season;
        this.title = data.title;
        this.torrents = new TorrentList(data.torrents);
    }
}
