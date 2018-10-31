declare module 'popcorn-api' {
    type Content = Show | Anime | Movie;

    export class RouteController {
        constructor(options: {
            tab: string,
            dataClass: Content
        });

        public pages(): Promise<Number>;
        public search(options: {
            page?: number,
            sort?: string,
            order?: number,
            genre?: string,
            query?: string
        }): Promise<Content[]>;
        public random(): Promise<Content>;
        public get(id: string): Promise<Content>;
        private _rawDetails(id: string | object): Promise<object>;
        private _request(endpoint: string, queryParams: object): Promise<object>;
    }

    export class Anime {
        constructor(routeController: RouteController, data?: object);
        
        private _patch(data: object): this;
        public fetch(): Promise<this>;
        public readonly lastUpdatedAt?: Date;
        public id: string;
        public malID: string;
        public title: string;
        public year: string;
        public slug: string;
        public type: string;
        public genres: string;
        public images: Images;
        public rating: Rating;
        public numSeasons: number;
        public synopsis?: string;
        public status?: string;
        public lastUpdatedTimestamp?: number;
        public episodes: Episode[];
        public seasons: Season[];
    }

    export class Episode {
        constructor(data?: object);

        private _patch(data: object): void;
        public readonly firstAiredAt?: Date;
        public tvdbID: string;
        public id: string
        public title: string;
        public episode: string;
        public season: string;
        public overview: string;
        public firstAiredTimestamp?: number;
        public dateBased: boolean;
        public torrents: TorrentList;
    }

    export class Movie {
        constructor(routeController: RouteController, data?: object);

        private _patch(data: object): this;
        public readonly releasedAt?: Date;
        public id: string;
        public imdbID: string;
        public title: string;
        public year: string;
        public synopsis: string;
        public runtime: string;
        public releasedTimestamp: number;
        public certification?: string;
        public trailer: string;
        public genres: string[];
        public images: Images;
        public rating: Rating;
        public torrents: {[lang: string]: TorrentList};
    }

    export class Season {
        constructor(data?: object);

        private _patch(data: object): void;
        public readonly size: number;
        public number: number;
        public episodes: Episode[];
    }

    export class Show {
        constructor(routeController: RouteController, data?: object);

        private _patch(data: object): this;
        public fetch(): Promise<this>;
        public readonly lastUpdatedAt?: Date;
        public id: string;
        public imdbID: string;
        public tvdbID: string;
        public title: string;
        public year: string;
        public slug: string;
        public rating: Rating;
        public images: Images;
        public numSeasons: number;
        public status: string;
        public synopsis: string;
        public runtime: string;
        public country: string;
        public network: string;
        public airDay: string;
        public airTime: string;
        public lastUpdatedTimestamp: number;
        public genres: string[];
        public episodes: Episode[];
        public seasons: Season[];
    }

    export class Torrent {
        constructor(data?: object);

        private _patch(data): void;
        public resolution: string;
        public url: string;
        public seeds: number;
        public peers: number;
        public size: number;
        public fileSize: string;
        public provider: string;
    }

    export class TorrentList {
        constructor(data?: object);

        private _patch(data): void;
        public readonly maxRes: Torrent;
        public '1080p'?: Torrent;
        public '720p'?: Torrent;
        public '480p'?: Torrent;
        public '0p'?: Torrent;
    }

    export class PopCorn {
        public readonly shows: RouteController;
        public readonly movies: RouteController;
        public readonly animes: RouteController;
    }

    interface Images {
        poster?: string,
        fanart?: string,
        banner?: string
    }

    interface Rating {
        percentage?: number,
        watching?: number,
        votes?: number,
        loved?: number,
        hated?: number
    }
}
