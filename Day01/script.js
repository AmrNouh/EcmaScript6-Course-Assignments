// Swap Two Numbers
let number1 = 5;
let number2 = 10;
console.log(`number1 before swap:  ${number1}`);
console.log(`number2 before swap:  ${number2}`);
[number1, number2] = [number2, number1];
console.log(`number1 after swap:  ${number1}`);
console.log(`number2 after swap:  ${number2}`);

// Max And Min Numbers
const numberArray = [20, 50, 10, 60, 40];
let [max, min] = [0, 0];
function findMaxAndMin(...params) {
  return ([max, min] = [Math.max(...params), Math.min(...params)]);
}
[max, min] = findMaxAndMin(20, 50, 10, 60, 40);
console.log(`Max Number is : ${max} and Min Number is : ${min}`);

// Array Methods
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// every
console.log(fruits.every((element) => typeof element == "string"));

// some
console.log(fruits.some((element) => element.startsWith("a")));

// filter
console.log(
  fruits.filter((element) => element.startsWith("a") || element.startsWith("s"))
);

// map
const newFruits = fruits.map((element) => `I Like ${element}`);

newFruits.forEach((element) => console.log(element));
