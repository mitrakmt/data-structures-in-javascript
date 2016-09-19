var Set = function() {
 var set = Object.create(setPrototype);
 set._storage = {};
 set._count = 0;
 return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
 this._storage[this._count] = item;
 this.count++;
};

setPrototype.contains = function(item) {
 var result = false;
 if (this._storage[this._count]) {
   result = true;
 }


 return result;
};

setPrototype.remove = function(item) {
 this._count--;
 delete this._storage[this._count];
};
