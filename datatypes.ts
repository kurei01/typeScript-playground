let lname: string;

lname = "Tuấn Anh";

let newName = lname.toUpperCase();

console.log(newName);

let age = 20; //auto age: number

let ans = parseInt("21");

let isValid: boolean = false;

let empList: string[];
empList = ["ku", "Tuấn Anh", "kurei"];
let findList = empList.find((emp) => emp === "kurei");

let numList: Array<number>;
numList = [1, 2, 3, 4, 5, 6];
let resNum = numList.filter((number) => number > 2);
let sum = numList.reduce((acc, num) => acc + num);

/*const*/ enum color { //const get the index
  red,
  green,
  blue,
}
let c: color = color.blue;

let swapNumbs: [num1: number, num2: number];

const swapNumbers = (num1: number, num2: number): [number, number] => {
  return [num2, num1];
};
swapNumbs = swapNumbers(10, 20);

let department: any;

console.log(resNum, findList, sum, swapNumbs);
