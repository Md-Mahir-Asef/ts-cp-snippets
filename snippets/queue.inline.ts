class MyQueue<T> {
  private queue: T[];
  private head: number;
  private maxSize: number;

  constructor(initVal: T[] = [], maxSize: number = 1000) {
    this.queue = initVal;
    this.head = 0;
    this.maxSize = maxSize;
  }

  public enqueue(val: T) {
    this.queue.push(val);
  }

  public dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;
    const val = this.queue[this.head];
    this.head++;

    // Optional cleaning to avoid memory leak
    if (this.head > this.maxSize) {
      this.queue = this.queue.slice(this.head);
      this.head = 0;
    }

    return val;
  }

  public front(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.queue[this.head];
  }

  public isEmpty(): boolean {
    return this.head >= this.queue.length;
  }

  public size(): number {
    return this.queue.length - this.head;
  }
}
