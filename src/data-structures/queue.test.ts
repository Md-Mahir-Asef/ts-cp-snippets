import { Queue } from './queue';

describe("Queue", () => {
  it("should return the correct value while dequeuing.", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  it("should return undefined when dequeuing empty queue.", ()=> {
    const queue = new Queue();
    expect(queue.dequeue()).toBe(undefined);
  });

  it("should return undefined while getting the front of a empty queue.", () => {
    const queue = new Queue();
    expect(queue.front()).toBe(undefined);
  });

  it("should return the front while the queue has a front value.", () => {
    const queue = new Queue([1, 2, 3, 4, 5]);
    expect(queue.front()).toBe(1);
    queue.dequeue();
    expect(queue.front()).toBe(2);
    queue.dequeue();
    expect(queue.front()).toBe(3);
    queue.dequeue();
    expect(queue.front()).toBe(4);
  });

  it("should return false while queue is not empty.", () => {
    const queue = new Queue([1]);
    expect(queue.isEmpty()).toBe(false);
    queue.enqueue(3);
    expect(queue.isEmpty()).toBe(false);
  });

  it("should return true while queue is empty.", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  it("should return the size of the queue.", () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0);
    queue.enqueue(1);
    expect(queue.size()).toBe(1);
    queue.enqueue(1);
    queue.enqueue(1);
    expect(queue.size()).toBe(3);
    queue.dequeue();
    expect(queue.size()).toBe(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.size()).toBe(0);
  })
});
