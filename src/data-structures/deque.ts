export class Deque<T> {
  private buffer: T[];
  private head: number;
  private tail: number;

  constructor(vals: T[] = [], maxSize: number = 20000) {
    this.buffer = new Array(maxSize);
    this.head = Math.floor(maxSize / 2);
    this.tail = this.head;
    for (const val of vals) this.pushBack(val);
  }

  public pushBack(val: T) {
    if (this.tail >= this.buffer.length)
      throw new Error("Deque overflow at back.");
    this.buffer[this.tail] = val;
    this.tail++;
  }

  public pushFront(val: T) {
    if (this.head <= 0) throw new Error("Deque overflow at front.");
    this.head--;
    this.buffer[this.head] = val;
  }

  public popBack(): T | undefined {
    if (this.isEmpty()) return undefined;
    const val = this.buffer[this.tail - 1];
    this.tail--;
    return val;
  }

  public popFront(): T | undefined {
    if (this.isEmpty()) return undefined;
    const val = this.buffer[this.head];
    this.head++;
    return val;
  }

  public front(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.buffer[this.head];
  }

  public back(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.buffer[this.tail - 1];
  }

  public isEmpty(): boolean {
    return this.head == this.tail;
  }

  public size(): number {
    return this.tail - this.head;
  }

  public toArray(): T[] {
    return this.buffer.slice(this.head, this.tail);
  }
}
