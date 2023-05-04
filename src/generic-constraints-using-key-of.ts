type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address"; //manual

type newTypeUsingKeyOf = keyof PersonType;

const a: newType = "address";
const b: newTypeUsingKeyOf = "name";

// function
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key];
}

const property = getProperty({ name: "Mr X", age: 20 }, "age");
