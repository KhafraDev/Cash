const assert = require('assert');
const Cash = require('../src/cache');
const Cache = new Cash();

describe('Cache', () => {
    describe('length and size are equal, length is an alias of size', () => {
        it('will be the same length', () => {
            assert.equal(Cache.size === Cache.length, true);
        })
    });
    describe('#setAll(options, ...Array["key", "value"])', () => {
        it('will now be length 3', () => {
            Cache.setAll({}, ['a', 'b'], ['c', 'd'], ['e', 'f']);
            assert.equal(Cache.length, 3);
        });
    });
    describe('#index("key")', () => {
        it('The first index (0) is "a"', () => {
            assert.equal(Cache.index('a'), 0);
        })
    });
    describe('#keyArray', () => {
        it('Returns an array', () => assert(Cache.keyArray() instanceof Array));
        it('Is the same length as the Cache', () => assert(Cache.keyArray().length === Cache.length));
    });
    describe('#valueArray', () => {
        it('Returns an array', () => assert(Cache.valueArray() instanceof Array));
        it('Is the same length as the Cache', () => assert(Cache.valueArray().length === Cache.length));
    });
    describe('#concat(Map|Cache)', () => {
        const map = new Map();
        map.set('g', 'h');
        map.set('i', 'j');
        it('A new Map was created with size 2', () => assert(map.size, 2));
        it('concated to cache will result in length of 5', () => {
            Cache.concat(map);
            assert(Cache.length, 5);
        });
    });
});