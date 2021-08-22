class TreeNode {
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class TreeDiameter {
    constructor() {
        this.treeDiameter = 0;
    }

    // O(n) time | O(n) space - where 'n' is the total number of nodes in the tree. This is 
    // due to the fact that we traverse each node once and we use space when we store
    // the recursion stack
    find_diameter(root) {
        this.calculate_height(root);
        return this.treeDiameter;
    }

    calculate_height(currentNode) {
        if (currentNode === null) {
            return 0
        }

        const leftTreeHeight = this.calculate_height(currentNode.left);
        const rightTreeHeight = this.calculate_height(currentNode.right);

        // if the current node doesn't have a left or a right subtree, we can't have
        // a path passing through it, since we need a leaf node on each side
        if (leftTreeHeight !== 0 && rightTreeHeight !== 0) {
            // diameter at the current node will be equal to the height of left subtree + 
            // the height of right sub-trees + '1' for the current node
            const diameter = leftTreeHeight + rightTreeHeight + 1;

            // update the global tree diameter
            this.treeDiameter = Math.max(this.treeDiameter, diameter);
        }

        // height of the current node will be equal to the maximum of the height sof
        // left or right subtrees plus '1' for the current node
        return Math.max(leftTreeHeight, rightTreeHeight) + 1;
    }
}