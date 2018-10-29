export default class Season {
    constructor(data) {
        if (data) this._patch(data);
    }

    _patch(data) {
        this.number = data.number;
        this.episodes = data.episodes;
    }

    get size() {
        return this.episodes.length;
    }
}
