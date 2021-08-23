const Deque = require('./collections/deque'); //http://www.collectionsjs.com

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// O(N) time | O(N) space

function traverse(root){
    let result = [];
    if (root === null){
        return result;
    }

    const queue = new Deque();
    queue.push(root);
    while (queue.length > 0) {
        const levelSize = queue.length;
        let currentLevel = [];
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();

            currentLevel.push(currentNode.val);

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        result.push(currentLevel)
    }

    return result;
}

// create an empty array to store the result
// check if we are given a null value root
// if so return result
// otherwise we are going to create a new data structure deque for constant lookup
// push the root node into the deque (double ended queue)
// while our deque length  is greater than 0 (because we put nodes in it and as long as we have nodes to test)
// let levelSize equal our queue.length and our current level to store our level array
// iterate over the length of our queue 
// take the first node out of the queue
// push the currentNode value in the currentLevel array
// if left child is not null, push left child into queue
// if right child is not null, push right child into queue
// after the for loop, push the current level into the result array
// after the while loop, return the result


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);