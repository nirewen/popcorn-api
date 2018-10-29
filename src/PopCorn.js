import Anime from 'structures/Anime';
import Movie from 'structures/Movie';
import Show from 'structures/Show';
import RouteController from 'structures/routes/RouteController'

const ShowController = new RouteController({ dataClass: Show, tab: 'show' });
const MovieController = new RouteController({ dataClass: Movie, tab: 'movie' });
const AnimeController = new RouteController({ dataClass: Anime, tab: 'anime' });

export default class PopCorn {
    static get shows() {
        return ShowController;
    }

    static get movies() {
        return MovieController;
    }

    static get animes() {
        return AnimeController;
    }
}
