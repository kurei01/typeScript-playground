export interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

let user: User = { name: "tuananh", age: 21, id: 1, email: "123@gmail.com" };

interface Employees extends User {
  salary: number;
}

let employee: Employees = {
  name: "tuananh",
  age: 21,
  id: 1,
  email: "123@gmail.com",
  salary: 2000,
};

export interface Login {
  login(): User;
}
