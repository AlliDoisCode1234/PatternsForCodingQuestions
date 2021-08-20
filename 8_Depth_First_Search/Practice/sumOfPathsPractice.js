class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// O(n) time | O(n) space

function find_sum_of_path_numbers(root) {
    return find_root_to_leaf_path_numbers(root, 0);
}


function find_root_to_leaf_path_numbers(currentNode, pathSum) {
    if (currentNode === null) {
        return 0;
    }

    pathSum = 10 * pathSum + currentNode.val;

    if (currentNode.left === null && currentNode.right === null){
        return pathSum;
    }

    return find_root_to_leaf_path_numbers(currentNode.left, pathSum) +
           find_root_to_leaf_path_numbers(currentNode.right, pathSum);
}


const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(`Total Sum of Path Numbers: ${find_sum_of_paths_numbers(root)}`);