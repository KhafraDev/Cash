const Cash = require('../src/cache');

const Cache = new Cash();

console.log('Cache length is = 0 ', Cache.length === 0);

Cache.setAll({}, ['a', 'b'], ['c', 'd'], ['e', 'f']);

console.log('setAll set 3 items. The length is now 3 ', Cache.length === 3);
console.log('a is the first key, or the 0 index ', Cache.index('a') === 0);

console.log(
    'keyArray returns an array of equal length of Cache',
    Cache.keyArray() instanceof Array && Cache.keyArray().length === Cache.length
);

console.log(
    'valueArray returns an array of equal length of Cache',
    Cache.valueArray() instanceof Array && Cache.valueArray().length === Cache.length
);

const map = new Map();
map.set('g', 'h');
map.set('i', 'j');

console.log('a new map has been created with 2 entries', map.size === 2);

console.log(
    'the new map concated to Cache results in length of 5 ',
    Cache.concat(map).length === 5
);

console.log('Cache.length is equal to Cache.size', Cache.length === Cache.size);