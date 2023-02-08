"use strict";
function sub(num1, num2, num3) {
    return num3 ? num1 - num2 - num3 : num1 - num2;
}
console.log(sub(1, 2));
console.log(sub(1, 2, 3));
function add(...num) {
    return num.reduce((acc, curr) => acc + curr, 0);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(add(...numbers));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d", "e"]);
console.log(concatResult, concatString);
