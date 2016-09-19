// This Tree is written using the pseudoclassical pattern

// Create a tree
var Tree = function(value) {
    var newTree = {};
    newTree.value = value;

    newTree.children = [];
    // Extend the functionality of the Tree class to include treeMethods
    _.extend(newTree, treeMethods);

    return newTree;
};

var treeMethods = {};

// Add a child onto the tree
treeMethods.addChild = function(value) {
    this.children.push(Tree(value));
};

// Check to see if the tree contains a specific value
treeMethods.contains = function(target) {
    var result = false;

    // Using recursion to search the tree
    function recurse(childrenArray) {
        childrenArray.forEach(function(child) {

            if (child.value === target) {
                result = true;
            } else if (child.children.length > 0) {
                recurse(child.children);
            }
        })
    }

    // Call the recurse function to begin searching tree
    recurse(this.children);

    return result;
};
