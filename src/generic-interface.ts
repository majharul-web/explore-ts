interface CrushInterface<T, X, Y = null> {
  name: string;
  age: T;
  relation: X;
  agree?: Y;
}

interface Person {
  name: string;
  age: number;
}

const person: CrushInterface<number, Person, boolean> = {
  name: "rahim",
  age: 10,
  relation: {
    name: "kona",
    age: 15,
  },
  agree: true,
};
