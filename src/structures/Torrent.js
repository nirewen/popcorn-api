export default class Torrent {
    constructor(data) {
        Object.keys(data).forEach(resolution => {
            this[resolution] = data[resolution];
        });
    }

    get maxRes() {
        return this['1080p'] || this['720p'] || this['480p'] || this['0'];
    }
}