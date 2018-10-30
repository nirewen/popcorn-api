import Episode from 'structures/Episode';
import Season from 'structures/Season';

/**
 * Creates a new Anime
 * @class
 */
export default class Anime {

    /**
     * @param {RouteController} routeController The route controller of this class
     * @param {?Object} data The data to patch into this class
     */
    constructor(routeController, data) {
        this.routeController = routeController;
        Object.defineProperty(this, 'routeController', { enumerable: false });

        if (data) this._patch(data);
    }

    /**
     * Patch data into this class
     * @param {Object} data The data to patch
     * @return {Anime} The anime with all fetched details
     * @private
     */
    _patch(data) {

        /**
         * The ID of the anime
         * @type {string}
         */
        this.id = data._id;
        
        /**
         * The MyAnimeList ID of the anime
         * @type {string}
         */
        this.malID = data.mal_id;
        
        /**
         * The title of the anime
         * @type {string}
         */
        this.title = data.title;
        
        /**
         * The year the anime was published
         * @type {string}
         */
        this.year = data.year;
        
        /**
         * The name of the anime for URLs
         * @type {string}
         */
        this.slug = data.slug;
        
        /**
         * The type of the anime
         * @type {string}
         */
        this.type = data.type;
        
        /**
         * The genres of the anime
         * @type {Array}
         */
        this.genres = data.genres;

        /**
         * The images of the anime
         * @type {Object}
         * @prop {?string} poster The poster image
         * @prop {?string} fanart The fanart image
         * @prop {?string} banner The banner image
         */
        this.images = data.images;
        
        /**
         * The ratings of the anime
         * @type {Object}
         * @prop {?number} percentage The total percentage of rates
         * @prop {?number} watching The total of watching rates
         * @prop {?number} votes The total of votes
         * @prop {?number} loved The total of love rates
         * @prop {?number} hated The total of hate rates
         */
        this.rating = data.rating;
        
        /**
         * The number of season the anime has
         * @type {number}
         */
        this.numSeasons = data.num_seasons;

        if (data.details) {
            
            /**
             * The synopsis of the anime
             * @type {?string}
             */
            this.synopsis = data.synopsis;
            
            /**
             * The current status of the anime
             * @type {?string}
             */
            this.status = data.status;
            
            /**
             * The last time the anime was update
             * @type {?number}
             */
            this.lastUpdatedTimestamp = data.last_updated;

            this.episodes = data.episodes.map(e => new Episode(e));
            for (let number = 1; number <= this.numSeasons; number++)
                this.seasons.push(new Season({
                    number,
                    episodes: this.episodes.filter(e => e.season == number)
                }));
        } else {

            /**
             * The episodes of the anime
             * @type {Episode[]}
             */
            this.episodes = [];

            /**
             * The seasons of the anime
             * @type {Season[]}
             */
            this.seasons = [];
        }

        return this;
    }

    /**
     * Fetch the details of this anime
     * @returns {Promise<Anime>} The anime with all fetched details
     */
    async fetch() {
        const data = await this.routeController._rawDetails(this);
        return this._patch(data);
    }

    /**
     * The date of the last time this anime was updated
     * @type {?Date}
     * @readonly
     */
    get lastUpdatedAt() {
        return this.lastUpdatedTimestamp ? new Date(this.lastUpdatedTimestamp) : null
    }
}