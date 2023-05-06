class Counter {
  static count: number = 0;

  increment() {
    return (Counter.count = Counter.count + 1);
  }
  decrement() {
    return (Counter.count = Counter.count--);
  }
  //   static increment() {
  //     return (Counter.count = Counter.count + 1);
  //   }
  //   static decrement() {
  //     return (Counter.count = Counter.count--);
  //   }
}

const count1 = new Counter();
const count2 = new Counter();

console.log("count", count1.increment());
console.log("count", count2.increment());

// console.log("count", Counter.increment());
// console.log("count", Counter.increment());
