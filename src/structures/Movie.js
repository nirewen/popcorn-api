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
         * 
         * @type {string[]}
         */
        this.genres = data.genres;
        
        /**
         * The images of the movie
         * @type {Images}
         */
        this.images = data.images;
        
        /**
         * The ratings of the movie
         * @type {Rating}
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
     * The date of when this movie was released
     * @type {?Date}
     * @readonly
     */
    get releasedAt() {
        return this.releasedTimestamp ? new Date(this.releasedTimestamp) : null
    }
}
