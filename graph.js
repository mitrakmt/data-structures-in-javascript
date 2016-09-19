// This graph is written using the pseudoclassical pattern

// Instantiate a new graph
var Graph = function() {
    this.storage = [];
    this.edge = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.storage.push(node);
    this.edge[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    var result = false;
    _.each(this.storage, function(element) {
        if (element === node) {
            result = true;
        }
    });
    return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    if (this.storage.indexOf(node) !== -1) {
        var toDelete = this.storage.indexOf(node);
        this.storage.splice(toDelete, 1);
    } else {
        return undefined;
    }

    delete this.edge[node];
    _.each(this.edge, function(element) {
        if (element.indexOf(node) !== -1) {
            var removeNode = element.indexOf(node);
            element.indexOf(element.splice(removeNode, 1));
        }
    });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes
Graph.prototype.hasEdge = function(fromNode, toNode) {
    var result = false;
    if (this.edge[fromNode].indexOf(toNode) !== -1) {
        result = true;
    }
    return result;
};

// Connects two nodes in a graph by adding an edge between them
Graph.prototype.addEdge = function(fromNode, toNode) {
    if (this.storage.indexOf(fromNode) !== -1 && this.storage.indexOf(toNode) !== -1) {
        this.edge[fromNode].push(toNode);
        this.edge[toNode].push(fromNode);
    };
};

// Remove an edge between any two specified (by value) nodes
Graph.prototype.removeEdge = function(fromNode, toNode) {
    if (this.edge[fromNode].indexOf(toNode) !== -1 && this.edge[toNode].indexOf(fromNode) !== -1) {
        var fromNodeIndex = this.edge[fromNode].indexOf(toNode);
        this.edge[fromNode].splice(fromNodeIndex, 1);
        var toNodeIndex = this.edge[toNode].indexOf(fromNode);
        this.edge[toNode].splice(toNodeIndex, 1);
    }
    return false;
};

// Pass in a callback which will be executed on each node of the graph
Graph.prototype.forEachNode = function(cb) {
    _.each(this.storage, function(element) {
        cb(element);
    });
};
