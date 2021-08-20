const Deque = require('./collections/deque'); //http://www.collectionsjs.com

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function find_paths(root, sum) {
    let allPaths = [];
    find_paths_recursive(root, sum, new Deque(), allPaths);
    return allPaths;
}


function find_paths_recursive(currentNode, sum, currentPath, allPaths) {
    if (currentNode === null) {
        return;
    }

    currentPath.push(currentNode.val);

    if (currentNode.val === sum && currentNode.left === null && currentNode.right === null){
        allPaths.push(currentPath.toArray());
    } else {

        find_paths_recursive(currentNode.left, sum - currentNode.val, currentPath, allPaths);

        find_paths_recursive(currentNode.right, sum - currentNode.val, currentPath, allPaths);
    }


    currentPath.pop();
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4)
root.right.right = new TreeNode(10);
root.right.right = new TreeNode(5);
let sum = 23,
    result = find_paths(root, sum);

process.stdout.write(`Tree paths with sum ${sum}: `);
for (i = 0; i < result.length; i++) {
    process.stdout.write(`[${result[i]}] `);
}