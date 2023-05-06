interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

/* class Engine implements IVehicle {
  constructor(public name: string, public brand: number, public model: string) {}
  startEngine() {
    console.log("Start");
  }
  stopEngine() {
    console.log("Stop");
  }
  move() {
    console.log("Move");
  }
  test() {
    console.log("Tes");
  }
} */

abstract class Engine {
  constructor(public name: string, public brand: number, public model: string) {}
  abstract startEngine(): void;
  stopEngine() {
    console.log("Stop");
  }
  move() {
    console.log("Move");
  }
  test() {
    console.log("Tes");
  }
}

class Car extends Engine {
  startEngine() {
    console.log("Stop");
  }
  stopEngine() {
    console.log("Stop");
  }
  move() {
    console.log("Move");
  }
  test() {
    console.log("Tes");
  }
}
