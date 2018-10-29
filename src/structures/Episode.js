export default class Episode {
    constructor(data) {
        this.id = data._id;
        this.title = data.title;
    }
}