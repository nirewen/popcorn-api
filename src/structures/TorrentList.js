import Torrent from 'structures/Torrent';

export default class TorrentList {
    constructor(data) {
        if (data) this._patch(data);
    }

    _patch(data) {
        Object.entries(data).forEach(([res, torrent]) => {
            torrent.resolution = res;
            this[res] = new Torrent(torrent);
        });
    }

    get maxRes() {
        return this['1080p'] || this['720p'] || this['480p'] || this['0'];
    }
}
