// Type alias
type UserType = {
  name: string;
  age: number;
};

/* intersection */
type IntersectedType = UserType & {
  roll: number;
};

// object
const user1: IntersectedType = {
  name: "jony",
  age: 10,
  roll: 10,
};

// interface
interface IUser {
  name: string;
  age: number;
}

/* extend */
interface IExtending extends IUser {
  roll: number;
}

const user2: IExtending = {
  name: "rahim",
  age: 12,
  roll: 12,
};

// function
type addNumberType = (num1: number, num2: number) => number;
interface IAddNumber {
  (num1: number, num2: number): number;
}
const addNumber: addNumberType = (num1, num2) => num1 + num2;
const addNumber2: IAddNumber = (num1, num2) => num1 + num2;

// array
type myNumberType = number[];
interface INuberType {
  [index: number]: number;
}
const myNumber: myNumberType = [1, 2, 3];
const myNumber2: INuberType = [1, 2, 3];
