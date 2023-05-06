/*
 ***key off guard
 */

type AlphaNumericType = number | string;

function addNumber(par1: AlphaNumericType, par2: AlphaNumericType): AlphaNumericType {
  if (typeof (par1 === "string") && typeof par2 === "string") {
    return par1 + par2;
  } else {
    return par1.toString() + par2.toString();
  }
}
console.log("addNumber", addNumber(2, "4"));

// in guard
type NormalType = {
  name: string;
};
type AdminType = {
  name: string;
  role: string;
};

function getAdmin(obj: NormalType | AdminType): string {
  if ("role" in obj) {
    return `this is ${obj.role}`;
  } else {
    return "I am normal user";
  }
}

const normalUser: NormalType = {
  name: "rahim",
};
const adminUser: AdminType = {
  name: "rahim",
  role: "admin",
};
console.log("getAdmin", getAdmin(normalUser));

// instanceof  guard
class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours}`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student("MR X", 15, "Dinajpur");
console.log("student1", student1);

class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(className: string) {
    return `${this.name} sir take ${className} subject`;
  }
}

function isPerson(person: object): person is Teacher {
  return person instanceof Teacher;
}

const getPerson = (person: object) => {
  if (isPerson(Student)) {
    console.log("I am Student");
  }
  if (person instanceof Teacher) {
    console.log(person.designation);
  }
};

const teacher1 = new Teacher("MR X", 15, "Dinajpur", "Tracher");
console.log(getPerson(teacher1));
console.log("take class", teacher1.takeClass("Math"));
console.log("teacher1", teacher1);
