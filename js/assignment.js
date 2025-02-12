// display even and odd numbers

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = [];
const odd = [];

for (let i = 0; i < num.length; i++){
    num[i] % 2 == 0? even.push(num[i]) : odd.push(num[i]);
}

console.log("Even numbers are: " + even);
console.log("Odd numbers are: " + odd);

// display greeting based on days

const weekdays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function greet(days){
    if (days == 'Sunday'){
        console.log("Happy Sunday");
    } else if (days == 'Monday'){
        console.log("Happy Monday");
    } else if (days == 'Tuesday'){
        console.log("Happy Tuesday");
    } else if (days == 'Wednesday'){
        console.log("Happy Wednesday");
    } else if (days == 'Thursday'){
        console.log("Happy Thursday");
    } else if (days == 'Friday'){
        console.log("Happy Friday");
    } else if (days == 'Saturday'){
        console.log("Happy Saturday");
    } else {
        console.log("Invalid day");
    }
}

greet('Sunday');

let cart = [
    {name: 'apple', price: 50},
    {name: 'banana', price: 30},
    {name: 'mango', price: 70},
    {name: 'orange', price: 40},
    {name: 'grapes', price: 60}
]

const total = cart.reduce((acc,item) => acc + item.price, 0);
console.log(total);

// multiplication table of 2 using for, forEach, and map 
const table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(){
    for (let i = 0; i < table.length; i++){
        console.log(table[i] * 2);
    }
    
}

function forEachLoop(){
    table.forEach(item => console.log(item * 2));
}

function mapLoop(){
    const result = table.map(item => item * 2);
    console.log(result);
}

forLoop();
forEachLoop();  
mapLoop();

const students = [
    {name: 'ram', paidStatus: true, scholarship: false},
    {name: 'shyam', paidStatus: false, scholarship: true},
    {name: 'hari', paidStatus: true, scholarship: false},
]

students.forEach((student) => {
    if(student.paidStatus && student.scholarship){
        console.log(`${student.name} can give the exam.`)
    }else
    console.log(`${student.name} can't give the exam.`)
})

console.log('-----------------------------------');

// use template literals to display the message
 const students1 = [
    {name: 'ram', age: 20, address: "kathmandu"},
    {name: 'shyam', age: 23, address: "pokhara"},
    {name: 'hari', age: 25, address: "chitwan"},
    {name: 'gita', age: 22, address: "dharan"},
]

students1.forEach((student) => {
    console.log(`Name: ${student.name}, Age: ${student.age}, Address: ${student.address}`);
})

console.log('-----------------------------------');


students1.map((student) => {
    console.log(`Name: ${student.name}, Age: ${student.age}, Address: ${student.address},`);
})

console.log('-----------------------------------');

for (let i = 0; i < students1.length; i++){
    console.log(`Name: ${students1[i].name}, Age: ${students1[i].age}, Address: ${students1[i].address}`);
}

console.log('-----------------------------------');

// to research on shift, unshift, indexof, includes, splice, slice methods in array
const fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];
fruits.shift();
fruits.unshift('kiwi');
console.log(fruits);

console.log(fruits.indexOf('mango'));
console.log(fruits.includes('orange'));
console.log(fruits.splice(1, 2));
console.log(fruits.slice(1, 3));