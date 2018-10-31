import TorrentList from 'structures/TorrentList';

/**
 * Creates a new Movie
 * @class
 */
export default class Movie {

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
     * @return {Movie} The movie with all fetched details
     * @private
     */
    _patch(data) {
        
        /** 
         * The ID of the movie
         * @type {string}
         */
        this.id = data._id;
        
        /** 
         * The IMDB ID of the movie
         * @type {string}
         */
        this.imdbID = data.imdb_id;
        
        /** 
         * The title of the movie
         * @type {string}
         */
        this.title = data.title;
        
        /** 
         * The year the movie was released
         * @type {string}
         */
        this.year = data.year;
        
        /** 
         * The synopsis of the movie
         * @type {string}
         */
        this.synopsis = data.synopsis;
        
        /** 
         * The duration of the movie in minutes
         * @type {string}
         */
        this.runtime = data.runtime;
        
        /** 
         * The timestamp of when the movie was released
         * @type {}
         */
        this.releasedTimestamp = data.released * 1000;
        
        /** 
         * The age certification of the movie
         * @type {string}
         */
        this.certification = data.certification;
        
        /** 
         * URL of the movie's trailer
         * @type {string}
         */
        this.trailer = data.trailer;
        
        /** 
         * The genres of the movie
         * @type {string[]}
         */
        this.genres = data.genres;
        
        /**
         * The images of the movie
         * @type {Object}
         * @prop {?string} poster The poster image
         * @prop {?string} fanart The fanart image
         * @prop {?string} banner The banner image
         */
        this.images = data.images;
        
        /**
         * The ratings of the movie
         * @type {Object}
         * @prop {?number} percentage The total percentage of rates
         * @prop {?number} watching The total of watching rates
         * @prop {?number} votes The total of votes
         * @prop {?number} loved The total of love rates
         * @prop {?number} hated The total of hate rates
         */
        this.rating = data.rating;

        /**
         * The torrents of the movie
         * @type {Object<string, TorrentList>}
         */
        this.torrents = Object.entries(data.torrents).reduce((obj, [ lang, torrents ]) => {
            obj[lang] = new TorrentList(torrents);
            return obj;
        }, {})

        return this;
    }

    /**
     * Fetch more details of this movie (if there are)
     * <br/><br/>
     * Usually you won't need this. But if you're working on a constant app 
     * that need to fetch details over and over, this might come in handy.
     * @returns {Promise<Movie>} The movie with all fetched details
     */
    async fetch() {
        const data = await this.routeController._rawDetails(this);
        return this._patch(data);
    }

    /**
     * The date of when this movie was released
     * @type {?Date}
     * @readonly
     */
    get releasedAt() {
        return this.releasedTimestamp ? new Date(this.releasedTimestamp) : null
    }
}
