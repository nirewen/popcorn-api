import fetch from 'node-fetch';
import Anime from 'structures/Anime';
import Movie from 'structures/Movie';
import Show from 'structures/Show';
import * as Constants from 'core/Constants';

export default class PopCorn {
    static async search({tab} = {}) {
        let result = await fetch(Constants.page(...arguments)).then(r => r.json());

        return result.map(res => {
            return {
                movies: () => new Movie(res),
                shows: () => new Show(res),
                animes: () => new Anime(res)
            }[tab]();
        });
    }

    static async pages(tab) {
        let result = await fetch(Constants.pages(tab)).then(r => r.json());

        return result.length;
    }

    static async details({tab, id} = {}) {
        let result = await fetch(Constants.details({tab, id})).then(r => r.json());

        return {
            movie: () => new Movie(result),
            show: () => new Show(result).fetch(),
            anime: () => new Anime(result).fetch()
        }[tab]();
    }

    static async random(tab) {
        let result = await fetch(Constants.random(tab)).then(r => r.json());

        return {
            movie: () => new Movie(result),
            show: () => new Show(result),
            anime: () => new Anime(result)
        }[tab]();
    }
}