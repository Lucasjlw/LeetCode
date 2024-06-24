class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const testTree = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const copy = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(copy);

  return root;
}

console.log(invertTree(testTree));
