// This Tree is written using the pseudoclassical pattern

var Tree = function(value) {
 var newTree = {};
 newTree.value = value;

 newTree.children = [];
 _.extend(newTree, treeMethods);

 return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
 this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
 var result = false;

 function recurse(childrenArray) {
   childrenArray.forEach(function (child) {

     if (child.value === target) {
       result = true;
     } else if (child.children.length > 0) {
       recurse (child.children);
     }
   })
 }

 recurse(this.children);

 return result;
};
