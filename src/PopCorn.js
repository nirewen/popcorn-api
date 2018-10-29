import fetch from 'node-fetch';
import Anime from 'structures/Anime';
import Movie from 'structures/Movie';
import Show from 'structures/Show';
import * as Constants from 'core/Constants';

export default class PopCorn {
    static async search({tab = 'shows'} = {}) {
        let result = await fetch(Constants.page(...arguments)).then(r => r.json());

        return result.map(res => {
            return {
                movies: new Movie(res),
                shows: new Show(res),
                animes: new Anime(res)
            }[tab];
        });
    }

    static async pages(tab = 'shows') {
        let result = await fetch(Constants.pages({tab})).then(r => r.json());

        return result.length;
    }

    static async details(id) {
        let result = await fetch(Constants.details({id})).then(r => r.json());

        return new Show(result);
    }

    static async random(tab = 'show') {
        let result = await fetch(Constants.random({tab})).then(r => r.json());

        return {
            movies: new Movie(result),
            shows: new Show(result),
            animes: new Anime(result)
        }[tab];
    }
}