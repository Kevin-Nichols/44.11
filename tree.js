/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    //DFS helper. 
    function sum(node) {
      //For if node is empty.
      if (!node) return 0;
      let accum = node.val;
      for (const child of node.children) {
        accum += sum(child);
      }
      return accum;
    }
    return sum(this.root);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    //DFS helper.
    function count(node) {
      //For if node is empty.
      if (!node) return 0;
      //Check if current node is an even number.
      let accum = node.val % 2 === 0 ? 1 : 0;
      for (const child of node.children) {
        accum += count(child);
      }
      return accum;
    }
    return count(this.root);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    //DFS helper.
    function greater(node) {
      //For if node is empty.
      if (!node) return 0;
      //Check if current node is greater than lowerBound.
      let accum = node.val > lowerBound ? 1 : 0;
      for (const child of node.children) {
        accum += greater(child);
      }
      return accum;
    }
    return greater(this.root);
  }
}

module.exports = { Tree, TreeNode };
