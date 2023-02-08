"use strict";
let lname;
lname = "Tuấn Anh";
let newName = lname.toUpperCase();
console.log(newName);
let age = 20; //auto age: number
let ans = parseInt("21");
let isValid = false;
let empList;
empList = ["ku", "Tuấn Anh", "kurei"];
let findList = empList.find((emp) => emp === "kurei");
let numList;
numList = [1, 2, 3, 4, 5, 6];
let resNum = numList.filter((number) => number > 2);
let sum = numList.reduce((acc, num) => acc + num);
/*const*/ var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
let c = color.blue;
let swapNumbs;
const swapNumbers = (num1, num2) => {
    return [num2, num1];
};
swapNumbs = swapNumbers(10, 20);
let department;
console.log(resNum, findList, sum, swapNumbs);
