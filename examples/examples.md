## More examples of the lib in action

First we require the module.

```javascript
const PopCorn = require('popcorn-api');
```

### Example #1

In this example we search for `Anime` using query `akame`<br/>
> Note that we can use `async` to `await` for the fetched data

```javascript
PopCorn.animes.search({query: 'akame'})
    .then(async ([anime]) => {
        await anime.fetch();

        console.log(anime); // -> Anime
    });
```

### Example #2

Or, as in this one, we can use a `.then` chain.<br/>
Since `.fetch` returns a promise, we can use its result in the next `.then`<br/>
> You can check what this method requires in the [documentation](?api=popcorn#RouteController#search).

```javascript
PopCorn.shows.search({query: 'flash'})
    .then(([show]) => show.fetch())
    .then(console.log); // -> Show
```

### Example #3

We can use the `movies` route to search for `Movies`.<br/>
In this example we use the query `darko`.
> Note that movies don't need to be `.fetch`'d (but they can)

```javascript
PopCorn.movies.search({query: 'darko'})
    .then(([movie]) => {
        console.log(movie); // -> Movie
    });
```

### Example #4

We can see the number of pages a route has.<br/>
Let's see the number of pages `shows` has.

```javascript
PopCorn.shows.pages()
    .then(console.log); // -> 55
```

### Example #5

You can also get contents from its ID.<br/>
In this example we `.get` a Movie from ID `tt2250912`.

```javascript
PopCorn.movies.get({id: 'tt2250912'})
    .then(console.log); // -> Movie
```

### Example #6

And you can get a random content from a route.<br/>
In this example we get a `.random` Anime.

```javascript
PopCorn.animes.random()
    .then(console.log); // -> Anime
```
