var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    var currentNode = list.head;

    if (!currentNode) {
      list.head = node;
      list.tail = node;

      return node;
    }

    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    list.tail = node;

    return node;
  };

  list.removeHead = function() {
    if (!list.head) {
      return undefined
    }

    var currentHead = list.head;
    var newHead = currentHead.next;
    list.head = newHead;
    return currentHead.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    var result = false;
    // recurse with if elses

    function recurse(currentNode) {
      if (currentNode.value === target) {
        result = true;
      } else if (currentNode.next) {
        currentNode = currentNode.next
        recurse(currentNode)
      }
    }

    recurse(currentNode);

    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
