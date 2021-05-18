class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function find_sum_of_path_numbers(root) {
    return find_root_to_leaf_path_numbers(root, 0);
}

function find_root_to_leaf_path_numbers(currentNode, pathSum) {
    if (currentNode === null) {
        return 0;
    }

    // calculate the path number of the current node
    pathSum = 10 * pathSum + currentNode.val;

    // if the current node is a leaf, return the current path sum
    if (currentNode.left === null && currentNode.right === null) {
        return pathSum
    }

    // traverse the left and the right sub-tree
    return find_root_to_leaf_path_numbers(currentNode.left, pathSum) +
        find_root_to_leaf_path_numbers(currentNode.right, pathSum);
}