const Deque = require('./collections/deque'); //http://www.collectionsjs.com

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// O(N) time | O(N) space
function traverse(root) {
    let result = [];
    if (root === null) {
        return result;
    }

    const queue = new Deque();
    queue.push(root);
    let leftToRight = true;
    while (queue.length > 0) {
        levelSize = queue.length;
        currentLevel = new Deque();
        for (let i = 0; i < levelSize; i++) {
            currentNode = queue.shift();

            // add the node to the current level based on the traverse direction 
            if (leftToRight) {
                currentLevel.push(currentNode.val);
            } else {
                currentLevel.unshift(currentNode.val);
            }


            // insert the children of current node in the queue
            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
        }
        result.push(currentLevel.toArray());
        // reverse the traversal direction
        leftToRight = !leftToRight
    }

    return result;
}