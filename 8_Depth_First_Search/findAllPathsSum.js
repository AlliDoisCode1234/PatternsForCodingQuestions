const Deque = require('./collections/deque'); //http://www.collectionsjs.com

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
// O(NlogN) time | O(N) space
function find_paths(root, sum) {
    allPaths = [];
    find_paths_recursive(root, sum, new Deque(), allPaths);
    return allPaths;
}

function find_paths_recursive(currentNode, sum, currentPath, allPaths) {
    if (currentNode === null) {
        return;
    }


    // add the current node to the path
    currentPath.push(currentNode.val);

    // if the current node is a leaf and its value is equal to sum, save the current path
    if (currentNode.val === sum && currentNode.left === null & currentNode.right === null) {
        allPaths.push(currentPath.toArray())
    } else {
        // traverse the left sub-tree
        find_paths_recursive(currentNode.left, sum - currentNode.val, currentPath, allPaths);
        // traverse the right sub-tree
        find_paths_recursive(currentNode.right, sum - currentNode.val, currentPath, allPaths)
    }

    // remove the current node from the path to backtrack
    // we need to remove the current node while we are going up the recursive call stack.
    currentPath.pop();
}
