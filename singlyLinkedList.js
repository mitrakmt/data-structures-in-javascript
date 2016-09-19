// This Linked List is written using the functional pattern

var LinkedList = function() {
    var list = {};
    list.head = null;
    list.tail = null;

    // Adds a node to the end of the chain, then reassigns the new node as the tail
    list.addToTail = function(value) {
        var node = new Node(value);
        var currentNode = list.head;

        if (!currentNode) {
            list.head = node;
            list.tail = node;

            return node;
        }

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
        list.tail = node;

        return node;
    };

    // Removes the head of the list, then sets the next node in the chain as the head
    list.removeHead = function() {
        if (!list.head) {
            return undefined
        }

        var currentHead = list.head;
        var newHead = currentHead.next;
        list.head = newHead;
        return currentHead.value;
    };

    // Check to see if the list contains a specific value
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

// This is the constructor for all new nodes that will be created
var Node = function(value) {
    var node = {};

    node.value = value;
    node.next = null;

    return node;
};
