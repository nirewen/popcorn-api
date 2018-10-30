import Torrent from 'structures/Torrent';

/**
 * Holds a list of Torrents
 * @class
 */
export default class TorrentList {

    /**
     * @param {?Object} data The data to patch into this class
     */
    constructor(data) {
        if (data) this._patch(data);
    }

    /**
     * Patch data into this class
     * @param {Object} data The data to patch
     * @private
     */
    _patch(data) {
        Object.entries(data).forEach(([res, torrent]) => {
            torrent.resolution = res;
            this[res] = new Torrent(torrent);
        });
    }

    /**
     * Gets the highest resolution in this TorrentList
     * @type {Torrent}
     */
    get maxRes() {
        return this['1080p'] || this['720p'] || this['480p'] || this['0'];
    }
}
