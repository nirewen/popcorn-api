import TorrentList from 'structures/TorrentList';

/**
 * Creates a new Episode
 * @class
 */
export default class Episode {

    /**
     * @param {Object} data The data of this episode
     */
    constructor(data) {
        this._patch(data);
    }

    /**
     * Patch data into this class
     * @param {Object} data The data to patch
     * @private
     */
    _patch(data) {
        
        /**
         * The TVDB ID of the episode
         * @type {string}
         */
        this.tvdbID = data.tvdb_id;
        
        /**
         * The ID of the episode
         * @type {string}
         */
        this.id = data.id || this.tvdbID;
        
        /**
         * The title of the episode
         * @type {string}
         */
        this.title = data.title;
        
        /**
         * The episode number
         * @type {string}
         */
        this.episode = data.episode;
        
        /**
         * The episode's season number
         * @type {string}
         */
        this.season = data.season;
        
        /**
         * The overview of the episode
         * @type {string}
         */
        this.overview = data.overview;
        
        /**
         * The first time the episode was aired
         * @type {number}
         */
        this.firstAiredTimestamp = data.first_aired ? data.first_aired * 1000 : null;
        
        /**
         * Whether the episode is date based of not
         * @type {boolean}
         */
        this.dateBased = data.date_based;
        
        /**
         * The torrents of the episode
         * @type {TorrentList}
         */
        this.torrents = new TorrentList(data.torrents);
    }

    /**
     * The date of the first time this episode was aired
     * @type {?Date}
     * @readonly
     */
    get firstAiredAt() {
        return this.firstAiredTimestamp ? new Date(this.firstAiredTimestamp) : null
    }
}
