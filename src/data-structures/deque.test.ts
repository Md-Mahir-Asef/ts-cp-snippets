import { Deque } from "./deque";

describe("Deque", () => {
  it("should initialize empty", () => {
    const dq = new Deque<number>();
    expect(dq.isEmpty()).toBe(true);
    expect(dq.size()).toBe(0);
    expect(dq.front()).toBeUndefined();
    expect(dq.back()).toBeUndefined();
  });

  it("should push and pop back correctly", () => {
    const dq = new Deque<number>();
    dq.pushBack(1);
    dq.pushBack(2);
    dq.pushBack(3);
    expect(dq.size()).toBe(3);
    expect(dq.popBack()).toBe(3);
    expect(dq.popBack()).toBe(2);
    expect(dq.popBack()).toBe(1);
    expect(dq.popBack()).toBeUndefined();
    expect(dq.isEmpty()).toBe(true);
  });

  it("should push and pop front correctly", () => {
    const dq = new Deque<number>();
    dq.pushFront(1);
    dq.pushFront(2);
    dq.pushFront(3);
    expect(dq.size()).toBe(3);
    expect(dq.popFront()).toBe(3);
    expect(dq.popFront()).toBe(2);
    expect(dq.popFront()).toBe(1);
    expect(dq.popFront()).toBeUndefined();
    expect(dq.isEmpty()).toBe(true);
  });

  it("should handle mixed front/back operations", () => {
    const dq = new Deque<string>();
    dq.pushBack("B");
    dq.pushFront("A");
    dq.pushBack("C");
    expect(dq.front()).toBe("A");
    expect(dq.back()).toBe("C");
    expect(dq.popFront()).toBe("A");
    expect(dq.popBack()).toBe("C");
    expect(dq.popFront()).toBe("B");
    expect(dq.isEmpty()).toBe(true);
  });

  it("should convert to array correctly", () => {
    const dq = new Deque<number>();
    dq.pushBack(1);
    dq.pushBack(2);
    dq.pushFront(0);
    expect(dq.toArray()).toEqual([0, 1, 2]);
  });

  it("should initialize from values in constructor", () => {
    const dq = new Deque(["x", "y", "z"]);
    expect(dq.toArray()).toEqual(["x", "y", "z"]);
    expect(dq.front()).toBe("x");
    expect(dq.back()).toBe("z");
    expect(dq.size()).toBe(3);
  });

  it("should throw on front overflow", () => {
    const dq = new Deque<number>([], 4);
    // Manually pushFront until head reaches 0
    dq["head"] = 1; // force head to 1 to test underflow
    dq.pushFront(42);
    expect(() => dq.pushFront(99)).toThrow("Deque overflow at front.");
  });

  it("should throw on back overflow", () => {
    const dq = new Deque<number>([], 4);
    // Manually set tail near end
    dq["tail"] = dq["buffer"].length - 1;
    dq.pushBack(42);
    expect(() => dq.pushBack(99)).toThrow("Deque overflow at back.");
  });
});
