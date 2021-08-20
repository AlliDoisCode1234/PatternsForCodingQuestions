class TreeNode {
    constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    }
}

// O(N) time | O(N) space

const hasPath = (root, sum) => {

    if(root === null){
        return false 
    }

    if(root.val === sum && root.left === null && root.right === null) {
        return true;
    }

    return hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val)

}