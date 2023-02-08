function sub(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 - num2 - num3 : num1 - num2;
}
console.log(sub(1, 2));
console.log(sub(1, 2, 3));

function add(...num: number[]): number {
  return num.reduce((acc, curr) => acc + curr, 0);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(add(...numbers));

function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}
let concatResult = getItems<number>([1, 2, 3, 4, 5]);
let concatString = getItems<string>(["a", "b", "c", "d", "e"]);
console.log(concatResult, concatString);
