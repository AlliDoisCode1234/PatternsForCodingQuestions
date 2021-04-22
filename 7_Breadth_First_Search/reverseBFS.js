const Deque = require('./collections/deque');


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


function traverse(root) {
    const result = new Deque();
    if (root === null) {
        return result;
    }

    const queue = new Deque();
    queue.push(root);
    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel = [];
        for (let i = 0; i < levelSize; i++) {
            currentNode = queue.shift();
            //add the node to the current level
            currentLevel.push(currentNode.val);
            //insert the children of current node in the queue
            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
        }

        result.unshift(currentLevel)
    }
    return result;
}