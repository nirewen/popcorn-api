import Episode from 'structures/Episode';
import Season from 'structures/Season';

/**
 * Creates a new Show
 * @class
 */
export default class Show {
    /**
     * @param {RouteController} routeController The route controlles of this class
     * @param {?Object} data The data to patch into this object
     */
    constructor(routeController, data) {
        this.routeController = routeController;
        Object.defineProperty(this, 'routeController', { enumerable: false });

        if (data) this._patch(data);
    }

    /**
     * Patch data into this class
     * @param {Object} data The data to patch
     * @return {Show} The show with all fetched details
     * @private
     */
    _patch(data) {
        
        /**
         * The ID of the show
         * @type {string}
         */
        this.id = data._id;
        
        /**
         * The IMDB ID of the show
         * @type {string}
         */
        this.imdbID = data.imdb_id;
        
        /**
         * The TVDB ID of the show
         * @type {string}
         */
        this.tvdbID = data.tvdb_id;
        
        /**
         * The title of the show
         * @type {string}
         */
        this.title = data.title;
        
        /**
         * The year the show was released
         * @type {string}
         */
        this.year = data.year;
        
        /**
         * The name of the show for URLs
         * @type {string}
         */
        this.slug = data.slug;
        
        /**
         * The images of the show
         * @type {Object}
         * @prop {?string} poster The poster image
         * @prop {?string} fanart The fanart image
         * @prop {?string} banner The banner image
         */
        this.images = data.images;
        
        /**
         * The ratings of the show
         * @type {Object}
         * @prop {?number} percentage The total percentage of rates
         * @prop {?number} watching The total of watching rates
         * @prop {?number} votes The total of votes
         * @prop {?number} loved The total of love rates
         * @prop {?number} hated The total of hate rates
         */
        this.rating = data.rating;
        
        /**
         * The number of seasons the movie has
         * @type {number}
         */
        this.numSeasons = data.num_seasons;

        if (data.details) {
            
            /**
             * The current status of the show
             * @type {string}
             */
            this.status = data.status;
            
            /**
             * The synopsis of the show
             * @type {string}
             */
            this.synopsis = data.synopsis;
            
            /**
             * The duration of each episode in minutes
             * @type {string}
             */
            this.runtime = data.runtime;
            
            /**
             * The country of the show
             * @type {string}
             */
            this.country = data.country;
            
            /**
             * The network the movie is released on
             * @type {string}
             */
            this.network = data.network;
            
            /**
             * The day each episode is released
             * @type {string}
             */
            this.airDay = data.air_day;
            
            /**
             * The hour each episode is released
             * @type {string}
             */
            this.airTime = data.air_time;
            
            /**
             * The last time the show was updated
             * @type {string}
             */
            this.lastUpdatedTimestamp = data.last_updated;
            
            /**
             * The genres of the show
             * @type {string[]}
             */
            this.genres = data.genres;
            
            /**
             * The images of the show
             * @type {Images}
             */
            this.images = data.images;
            
            /**
             * The rating of the show
             * @type {Rating}
             */
            this.rating = data.rating;

            this.episodes = data.episodes.map(e => new Episode(e));
            for (let number = 1; number <= this.numSeasons; number++)
                this.seasons.push(new Season({
                    number,
                    episodes: this.episodes.filter(e => e.season == number)
                }));
        } else {
            
            /**
             * The episodes of the show
             * @type {Episode[]}
             */
            this.episodes = [];
            
            /**
             * The seasons of the show
             * @type {Season[]}
             */
            this.seasons = [];
        }

        return this
    }

    /**
     * Fetch the details of this show
     * @returns {Promise<Show>} The show with all fetched details
     */
    async fetch() {
        const data = await this.routeController._rawDetails(this);
        return this._patch(data);
    }

    /**
     * The date of the last time this show was updated
     * @type {?Date}
     * @readonly
     */
    get lastUpdatedAt() {
        return this.lastUpdatedTimestamp ? new Date(this.lastUpdatedTimestamp) : null
    }
}
