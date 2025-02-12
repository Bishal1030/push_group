// to research on shift, unshift, indexof, includes, splice, slice methods in array
const fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];
const shift = fruits.shift();
console.log(fruits);

fruits.unshift('kiwi');
console.log(fruits);

console.log(fruits.indexOf('mango'));
console.log(fruits.includes('orange'));
console.log(fruits.splice(1, 4));

const fruits1 = ['apple', 'banana', 'mango', 'orange', 'grapes'];

console.log(fruits1.slice(0, 3));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.slice(2, 5));