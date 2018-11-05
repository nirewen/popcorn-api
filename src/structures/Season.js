/**
 * Creates a new Season
 * @class
 */
export default class Season {

    /**
     * @param {Object?} data The data to patch into this class
     */
    constructor(data) {
        if (data) this._patch(data);
    }

    /**
     * Patch data into this class
     * @private
     */
    _patch(data) {

        /**
         * The number of the season
         * @type {number}
         */
        this.number = data.number;

        /**
         * The episodes in the season
         * @type {Episode[]}
         */
        this.episodes = data.episodes;
    }

    /**
     * The total of episodes this season has
     * @type {number}
     */
    get size() {
        return this.episodes.length;
    }
}
