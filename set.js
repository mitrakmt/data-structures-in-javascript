// This Set is written using the prototypal pattern

var Set = function() {
    // Create the set object and include functionality from the setPrototype object
    var set = Object.create(setPrototype);
    set._storage = {};
    set._count = 0;
    return set;
};

var setPrototype = {};

// Add a value to the set
setPrototype.add = function(item) {
    this._storage[this._count] = item;
    this.count++;
};

// Check to see if the set contains a specific value
setPrototype.contains = function(item) {
    var result = false;
    if (this._storage[this._count]) {
        result = true;
    }

    return result;
};

// Remove a value from the set
setPrototype.remove = function(item) {
    this._count--;
    delete this._storage[this._count];
};
