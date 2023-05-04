/* create generic type */
type genericArray<T> = Array<T>;

const numbers1: number[] = [1, 2, 3];
// we can also write
const numbers2: Array<number> = [1, 2, 3, 4];
const numbers3: genericArray<number> = [1, 2, 3, 4];

type rolNumberType = {
  name: string;
  age: number;
};

const student: genericArray<rolNumberType> = [{ name: "rahim", age: 10 }];

type genericTuple<X, Y> = [X, Y];

const relation: genericTuple<string, string> = ["rahim", "rahima"];

type obj = {
  name: string;
  prof: string;
};
interface Iobj {
  name: string;
  prof: string;
}

const relation2: genericTuple<Iobj, string> = [{ name: "rahim", prof: "student" }, "any"];
