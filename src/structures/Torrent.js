export default class Torrent {
    constructor(data) {
        this.resolution = data.resolution;
        this.url = data.url;
        this.seeds = data.seeds || data.seed || 0;
        this.peers = data.peers || data.seed || 0;
        this.size = data.size;
        this.filesize = data.filesize;
        this.provider = data.provider;
    }
}