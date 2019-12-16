# Cash
* Cache module extending the native Map class.
* I wrote this because someone in a Discord server had no idea how to. I don't personally use this code and it may (expect it to) be un-maintained.

# Start
* Cache(s) retain all methods that Maps have.
* This does not override or modify ``Map`` in any way.
```js
const Cash = require('cash');
const Cache = new Cash(/* Map options */);
```

# Additions

## index
Finds the index of a given key.
Similar to ``Array.indexOf``.

```js
Cache.index('key');
```

## keyArray
Returns an array of the cache's keys.

```js
Cache.keyArray();
```

## valueArray
Returns an **array** of the cache's values.
Better than ``<Map>.values`` because it doesn't involve Iterators.

```js
Cache.valueArray();
```

## setAll
Sets multiple entries at once.

```js
Cache.setAll({ acceptNull: true }, ['k', 'v'], ['k2', 'v2']);
```

## concat
Concat two caches (or concat a Map to Cache).

```js
const map = new Map();
map.set('a', 'b');
map.set('c', 'd');

Cache.concat(map);
Cache.concat('string'); // error
```

## stringify
Convert <Cache> to valid JSON that can be saved or read from.
It can also be parsed using ``Cache.parse()``.

```js
Cache.stringify();
```

## parse
Convert JSON string to a Map object.

```js
Cache.parse();
// convert back to Cache
const cache = new Cash(Cache.parse('{ "JSON": "string" }'));
```

## property length
Alias for ``Map.size``.