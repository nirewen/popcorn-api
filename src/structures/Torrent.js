/**
 * Creates a new Torrent
 * @class
 */
export default class Torrent {

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
        
        /**
         * The resolution of the torrent
         * @type {string}
         */
        this.resolution = data.resolution;
        
        /**
         * The magnet URL of the torrent
         * @type {string}
         */
        this.url = data.url;
        
        /**
         * The number of seeds of the torrent
         * @type {number}
         */
        this.seeds = data.seeds || data.seed || 0;
        
        /**
         * The number of peers of the torrent
         * @type {number}
         */
        this.peers = data.peers || data.seed || 0;
        
        /**
         * The size of the torrent file
         * @type {number}
         */
        this.size = data.size;
        
        /**
         * Human-readable size of the torrent file
         * @type {string}
         */
        this.fileSize = data.filesize;
        
        /**
         * The torrent provider
         * @type {string}
         */
        this.provider = data.provider;
    }
}
