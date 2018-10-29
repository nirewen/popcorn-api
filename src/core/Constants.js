import qs from 'querystring';

const BASE = 'https://tv-v2.api-fetch.website';

export const pages = (tab = 'shows') => `${BASE}/${tab}`;
export const page = ({tab = 'shows', page = 1, sort = 'trending', order = -1, genre = 'all', keywords} = {}) => `${BASE}/${tab}/${page}?${qs.stringify({sort, order, genre, keywords})}`;
export const details = ({id, tab = 'show'} = {}) => `${BASE}/${tab}/${id}`;
export const random = ({tab = 'show'} = {}) => `${BASE}/random/${tab}`;