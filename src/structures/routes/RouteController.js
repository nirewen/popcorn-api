import qs from 'querystring';
import fetch from 'node-fetch';
import { baseURL } from 'core/Constants';

export default class RouteController {
  constructor({ tab, dataClass }) {
    this.tab = tab;
    this.dataClass = dataClass
  }

  pages() {
    return this._request(`/${this.tab}s`);
  }

  search({page = 1, sort = 'trending', order = -1, genre = 'all', query} = {}) {
    return this._request(`/${this.tab}s/${page}`, {sort, order, genre, keywords: query}).then(values => {
      return values.map(value => new this.dataClass(this, value));
    });
  }

  random() {
    return this._request(`/random/${this.tab}`).then(value => new this.dataClass(this, value));
  }

  get(id) {
    return this._rawDetails(id).then(value => new this.dataClass(this, value));
  }

  _rawDetails(id) {
    if (typeof id === 'object') id = id.id;
    return this._request(`/${this.tab}/${id}`).then(data => {
      data.details = true;
      return data;
    });
  }

  _request(endpoint, queryParams = {}) {
    queryParams = qs.stringify(queryParams);
    return fetch(`${baseURL}${endpoint}?${queryParams}`).then(r => r.json());
  }
}
