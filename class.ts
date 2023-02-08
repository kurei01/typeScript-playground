// import { Login, User } from "./interface";
import * as UserLogin from "./interface";

interface Address {
  street: string;
  city: string;
  state: string;
  pin: string;
}

class Employee implements UserLogin.Login {
  #id: number; //private id
  protected name: string;
  address: Address;

  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: Address) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }
  login(): UserLogin.User {
    return { name: "tuananh", id: 1, email: "123@gmail.com" };
  }

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  getNameWithAddress(): string {
    return `${this.name} stay at ${this.address}`;
  }
}

class Manager extends Employee {
  constructor(id: number, name: string, address: Address) {
    super(id, name, address);
  }
  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address}`;
  }
}

let kurei = new Employee(1, "tuananh", {
  street: "35-cl",
  city: "hcm",
  state: "quan2",
  pin: "0202",
});
let mike = new Manager(2, "Mike", "Cherise Drive");

console.log(kurei.empId);
console.log(kurei, kurei.getNameWithAddress());
console.log(mike, mike.getNameWithAddress());
console.log(Employee.getEmployeeCount());
