let myFunc: Function;

// normal function
function addNumber(a: string, b: string): string {
  return a + b;
}

addNumber("s", "a");

// arrow function
const addArrowNum = (a: number, b: number): number => a + b;
addArrowNum(10, 20);

// callback function

const arr: number[] = [1, 2, 3];
const newArr: number[] = arr.map((num: number): number => num + 2);

// object

const infos: { name: string; age: number; result(a: number): void } = {
  name: "rahim",
  age: 10,
  result(marks: number) {
    return 10;
  },
};
