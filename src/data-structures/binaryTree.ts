import { Queue } from "./queue";

class TreeNode<T> {
  public val: T;
  public left: TreeNode<T> | null = null;
  public right: TreeNode<T> | null = null;
  constructor(val: T) {
    this.val = val;
  }
}

export class BinaryTree<T> {
  private root: TreeNode<T> | null = null;

  insert(value: T): void {
    const newNode = new TreeNode<T>(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    const queue = new Queue<TreeNode<T>>([this.root]);

    while (!queue.isEmpty()) {
      const current = queue.dequeue()!;

      if (current.left === null) {
        current.left = newNode;
        return;
      } else {
        queue.enqueue(current.left);
      }

      if (current.right === null) {
        current.right = newNode;
        return;
      } else {
        queue.enqueue(current.right);
      }
    }
  }

  contains(value: T): boolean {
    const search = (node: TreeNode<T> | null): boolean => {
      if (node === null) return false;
      if (node.val === value) return true;
      return search(node.left) || search(node.right);
    };
    return search(this.root);
  }

  inOrderTraversal(): T[] {
    const result: T[] = [];
    const traverse = (node: TreeNode<T> | null): void => {
      if (node === null) return;
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  preOrderTraversal(): T[] {
    const result: T[] = [];
    const traverse = (node: TreeNode<T> | null): void => {
      if (node === null) return;
      result.push(node.val);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  postOrderTraversal(): T[] {
    const result: T[] = [];
    const traverse = (node: TreeNode<T> | null): void => {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.val);
    };
    traverse(this.root);
    return result;
  }

  levelOrderTraversal(): T[] {
    if (this.root === null) return [];
    const result: T[] = [];

    const queue = new Queue<TreeNode<T>>([this.root]);

    while (!queue.isEmpty()) {
      const current = queue.dequeue()!;
      if (!current) return result;
      result.push(current.val);
      if (current.left !== null) queue.enqueue(current.left);
      if (current.right !== null) queue.enqueue(current.right);
    }

    return result;
  }

  setRoot(node: TreeNode<T>): void {
    this.root = node;
  }

  size(): number {
    const countNodes = (node: TreeNode<T> | null): number => {
      if (node === null) return 0;
      return 1 + countNodes(node.left) + countNodes(node.right);
    };
    return countNodes(this.root);
  }

  height(): number {
    const getHeight = (node: TreeNode<T> | null): number => {
      if (node === null) return 0;
      return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    };

    return getHeight(this.root);
  }

  isEmpty(): boolean {
    return this.root === null;
  }
}

