// class Person {
//   name: string;
//   age: number;
//   address: string;

//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   makeSleep(hours: number): string {
//     return `This ${this.name} will sleep for ${hours}`;
//   }
// }

// class Student extends Person {
//   constructor(name: string, age: number, address: string) {
//     super(name, age, address);
//   }
// }

// const student1 = new Student("MR X", 15, "Dinajpur");
// console.log("student1", student1);

// class Teacher extends Person {
//   designation: string;

//   constructor(name: string, age: number, address: string, designation: string) {
//     super(name, age, address);
//     this.designation = designation;
//   }

//   takeClass(className: string) {
//     return `${this.name} sir take ${className} subject`;
//   }
// }

// const teacher1 = new Teacher("MR X", 15, "Dinajpur", "Tracher");
// console.log("take class", teacher1.takeClass("Math"));
// console.log("teacher1", teacher1);
