import Torrent from 'structures/Torrent';

export default class TorrentList {
    constructor(data) {
        Object.keys(data).forEach(resolution => {
            data[resolution].resolution = resolution;
            this[resolution] = new Torrent(data[resolution]);
        });
    }

    get maxRes() {
        return this['1080p'] || this['720p'] || this['480p'] || this['0'];
    }
}