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
        this.number = data.number;
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
