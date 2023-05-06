class Animal {
  /*  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  } */

  //  or also use

  /* Parameter Properties:
    TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter */
  constructor(public name: string, public species: string, public sound: string) {}
  makeSound(): void {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("my dog", "dog", "ghew ghew");
const cat = new Animal("my cat", "cat", "mew mew");

console.log("dog", dog);
console.log("cat", cat);
