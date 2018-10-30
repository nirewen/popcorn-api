import Anime from 'structures/Anime';
import Movie from 'structures/Movie';
import Show from 'structures/Show';
import RouteController from 'structures/routes/RouteController'

const ShowController = new RouteController({ dataClass: Show, tab: 'show' });
const MovieController = new RouteController({ dataClass: Movie, tab: 'movie' });
const AnimeController = new RouteController({ dataClass: Anime, tab: 'anime' });

/**
 * The PopCorn class
 * @module PopCorn
 * @class
 */
export default class PopCorn {

    /**
     * Get the shows route
     * @returns {RouteController}
     * @readonly
     */
    static get shows() {
        return ShowController;
    }

    /**
     * Get the movies route
     * @returns {RouteController}
     * @readonly
     */
    static get movies() {
        return MovieController;
    }

    /**
     * Get the animes route
     * @returns {RouteController}
     * @readonly
     */
    static get animes() {
        return AnimeController;
    }
}
