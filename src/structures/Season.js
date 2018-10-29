export default class Season {
    constructor(data) {
        this.number = data.number;
        this.episodes = data.episodes;
    }

    get size() {
        return this.episodes.length;
    }
}