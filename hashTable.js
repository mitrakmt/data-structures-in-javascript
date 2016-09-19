// This Hash Table is written using the pseudoclassical pattern

var HashTable = function() {
    this._limit = 8;
    this._storage = LimitedArray(this._limit);
};

// Inserts a value into the hash table
HashTable.prototype.insert = function(k, v) {
    var index = getIndexBelowMaxForKey(k, this._limit);

    if (this._storage.get(index) === undefined) {
        this._storage.set(index, []);
    }

    var exists = false;
    var existsIndex;
    var currentBucket = this._storage.get(index);

    if (exists) {
        currentBucket[existsIndex] = v;
    } else {
        var currentBucket = this._storage.get(index);
        currentBucket.push([k, v]);
    }
};

// Retrieves a value from the hash table
HashTable.prototype.retrieve = function(k) {
    var result;
    var index = getIndexBelowMaxForKey(k, this._limit);
    var currentBucket = this._storage.get(index);

    _.each(currentBucket, function(element) {
        if (element[0] === k) {
            result = element[1];
        }
    });
    return result;
};

// Removes a value from the hash table
HashTable.prototype.remove = function(k) {
    var index = getIndexBelowMaxForKey(k, this._limit);

    var currentBucket = this._storage.get(index);
    _.each(currentBucket, function(element, index) {
        if (element[0] === k) {
            currentBucket.splice(index, 1);
        }
    });

};

// ---- Helper Functions Below ----- //

var LimitedArray = function(limit) {
    var storage = [];

    var limitedArray = {};
    limitedArray.get = function(index) {
        checkLimit(index);
        return storage[index];
    };
    limitedArray.set = function(index, value) {
        checkLimit(index);
        storage[index] = value;
    };
    limitedArray.each = function(callback) {
        for (var i = 0; i < storage.length; i++) {
            callback(storage[i], i, storage);
        }
    };

    var checkLimit = function(index) {
        if (typeof index !== 'number') {
            throw new Error('setter requires a numeric index for its first argument');
        }
        if (limit <= index) {
            throw new Error('Error trying to access an over-the-limit index');
        }
    };

    return limitedArray;
};

// This is hashing function will turn any string into an integer that is well-distributed
// between the numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = (hash << 5) + hash + str.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
        hash = Math.abs(hash);
    }
    return hash % max;
};
