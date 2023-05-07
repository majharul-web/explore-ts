interface Person {
  name: string;
  age: number;
  email: string;
}

const people: Person[] = [
  { name: "Alice", age: 30, email: "alice@example.com" },
  { name: "Bob", age: 25, email: "bob@example.com" },
  { name: "Charlie", age: 35, email: "charlie@example.com" },
];

function findPersonByEmail(people: Person[], email: string): Person | null {
  //   for (let i = 0; i < people.length; i++) {
  //     if (people[i].email === email) {
  //       return people[i];
  //     }
  //   }

  for (const person of people) {
    if (person.email === email) return person;
  }
  return null;
}

const person1 = findPersonByEmail(people, "alice@example.com");
console.log(person1); // Output: { name: 'Alice', age: 30, email: 'alice@example.com' }

const person2 = findPersonByEmail(people, "david@example.com");
console.log(person2); // Output: null
