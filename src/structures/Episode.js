export default class Episode {
    constructor(data) {
        this.id = data._id;
        this.title = data.title;
        this._patch(data);
    }

    _patch(data) {}
}
