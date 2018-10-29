import fetch from 'node-fetch';
import Show from 'structures/Show';
import * as Constants from 'core/Constants';

export default class PopCorn {
    static async search(options) {
        let result = await fetch(Constants.page(options)).then(r => r.json());

        return result.map(show => new Show(show));
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

        return new Show(result);
    }
}