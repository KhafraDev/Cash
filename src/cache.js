class Cache extends Map {
    constructor(i) {
        super(i);
    }

    /**
     * Finds the index of a given value.
     * @param {any} k Value to find the index of.
     * @returns {number} index of the value
     */
    index(k) {
        return this.keyArray().indexOf(k);
    }

    /**
     * returns an array of the cache's keys.
     * @returns {Array<any>} cache keys.
     */
    keyArray() {
        return [...this.keys()]; // take this Iterators!
    }

    /**
     * Returns an array of the cache's values.
     * Better than ``<Map>.values`` because it doesn't involve Iterators.
     * @returns {Array<any>} cache values.
     */
    valueArray() {
        return [...this.values()];
    }

    /**
     * Sets all values in the cache.
     * @example Cache.setAll({ acceptNull: false }, ['k', 'v'], ['k2', 'v2']);
     * @param  {...any[]} i An array of iterable objects
     * @param {boolean} acceptNull Allow null values to be set as key/value. 
     */
    setAll({ acceptNull = false } = {}, ...i) {
        if(!i.every(a => Array.isArray(a))) throw new Error('All values must be [Key, Value]');
        
        for(const [key, value] of i) {
            if((!key || !value) && !acceptNull) 
                continue;
            this.set(key, value);
        }

        return this;
    }

    /**
     * concat to Cache objects (or Maps).
     * @param {map} map object to concat to ``this``
     * @returns {Cache} cache object
     */
    concat(map) {
        if(!(map instanceof Map)) throw new Error('concat accepts a map object.');

        for(const [key, value] of map) {
            this.set(key, value);
        }

        return this;
    }

    /**
     * Convert <Cache> to valid JSON that can be saved or read from.
     * Uses ``JSON.stringify`` under the hood.
     * @returns {string}
     */
    stringify() {
        const temp = {};
        for(const [key, value] of this) {
            Object.assign(temp, { [key]: value }); // something I picked up on with MongoDB
        }
        
        return JSON.stringify(temp);
    }

    /**
     * Converts string to Map (which can be converted back to Cache).
     * @param {string} str 
     * @returns {Map<any, any>} Map object from JSON
     */
    parse(str = '{}') {
        try {
            const parsed = JSON.parse(str); // can throw error
            const cache = new Map();

            for(const [key, value] of Object.entries(parsed)) {
                cache.set(key, value);    
            }

            return cache;
        } catch(err) {
            throw err;
        }
    }

    /**
     * Alias for <Map>.size
     * @returns {number}
     */
    get length() {
        return this.size;
    }
}

module.exports = Cache;