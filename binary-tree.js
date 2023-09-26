/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    //DFS helper.
    function min(node) {
      //For if node is empty.
      if (!node) return 0;
      //For if depth is 1.
      if (!node.left && !node.right) return 1;

      //Calculate depths of left and right paths.
      const leftDepth = min(node.left);
      const rightDepth = min(node.right);

      //Return the min depth of the paths + 1 for the current node
      return 1 + Math.min(leftDepth, rightDepth);
    }
    return min(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    //DFS helper.
    function max(node) {
      //For if node is empty.
      if (!node) return 0;

      //Calculate depths of left and right paths.
      const leftDepth = min(node.left);
      const rightDepth = min(node.right);

      //Return the max depth of the paths + 1 for the current node
      return 1 + Math.max(leftDepth, rightDepth);
    }
    return max(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    //DFS helper.
    function sum(node) {
      //For if node is empty.
      if (!node) return 0;

      //Calculate depths of left and right paths.
      const leftDepth = Math.max(0, sum(node.left));
      const rightDepth = Math.max(0, sum(node.right));

      //Return the max sum including the current node.
      return node.val + Math.max(leftSum, rightSum);
    }
    return sum(this.root);
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let res = null;
    let curr = this.root;

    while(curr) {
      if(curr.val > lowerBound) {
        res = curr.val;
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return res;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
