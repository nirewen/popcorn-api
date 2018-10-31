[![npm][download-badge]][npm]
[![David][dep-badge]][dep-link]
[![Build Status][build-badge]][build-link]
![GitHub license][mit]

[![NPM][large-badge]][stats-link]

# Popcorn API <sup>[![Version Badge][version-badge]][npm]</sup>

Easy way to get data from the Popcorn Time API

Documentation is available at https://popcorn-api.js.org/

## Installation

Via NPM:
```sh
$ npm install popcorn-api
```

## Usage

Popcorn-API comes with 3 routes you can use: `anime`, `shows` and `movies`.<br/>
To access a route, you use it as a property of PopCorn: **PopCorn**`.[route]`.

## Examples

```javascript
const PopCorn = require('popcorn-api');

// * Search for Animes using query 'kill'
PopCorn.animes.search({query: 'kill'})
    .then(async ([anime]) => {
        await anime.fetch();

        console.log(anime); // -> Anime
    });

// * Search for TV Shows using query 'flash'
PopCorn.shows.search({query: 'flash'})
    .then(([show]) => show.fetch())
    .then(console.log); // -> Show
```

Find more examples in [Examples](?content=examples)

[npm]: https://npmjs.org/package/popcorn-api
[large-badge]: https://nodei.co/npm/popcorn-api.png?downloads=true&downloadRank=true&stars=true
[stats-link]: https://nodei.co/npm/popcorn-api/
[version-badge]: https://versionbadge.now.sh/npm/popcorn-api.svg
[download-badge]: https://img.shields.io/npm/dt/popcorn-api.svg?maxAge=3600
[build-badge]: https://api.travis-ci.com/nirewen/popcorn-api.svg?branch=master
[build-link]: https://travis-ci.com/nirewen/popcorn-api
[dep-badge]: https://img.shields.io/david/nirewen/popcorn-api.svg
[dep-link]: https://david-dm.org/nirewen/popcorn-api
[mit]: https://img.shields.io/badge/license-MIT-blue.svg
