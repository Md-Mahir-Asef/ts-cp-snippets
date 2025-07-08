class ListNode<T> {
  public val: T;
  public next: ListNode<T> | null = null;
  constructor(val: T) {
    this.val = val;
  }
}

export class SinglyLinkedList<T> {
  public head: ListNode<T> | null = null;

  public append(val: T): void {
    const newNode = new ListNode<T>(val);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  public prepend(val: T): void {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  public removeFirst(): T | null {
    if (!this.head) return null;
    let val = this.head.val;
    this.head = this.head.next;
    return val;
  }

  public removeLast(): T | null {
    if(!this.head) return null;
    if(!this.head.next) {
      let val = this.head.val;
      this.head = null;
      return val;
    }
    let current = this.head;
    while (current.next && current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
    return current.val;
  }

  public size(): number {
    if (!this.head) return 0;
    let current = this.head;
    let count = 1;
    while (current.next !== null) {
      current = current.next;
      count++;
    }
    return count;
  }

  public isEmpty(): boolean {
    if (this.head === null) return true;
    return false;
  }

  public toArray(): T[] {
    if(!this.head) return [];
    var arr = [];
    let current = this.head;
    while(current.next !== null) {
      arr.push(current.val);
      current = current.next;
    }
    arr.push(current.val);
    return arr;
  }

  public has(val: T): boolean {
    if(!this.head) return false;
    let current = this.head;
    while (current.next !== null) {
      if (current.val === val) return true;
      current = current.next;
    }
    return current.val === val;
  }
}