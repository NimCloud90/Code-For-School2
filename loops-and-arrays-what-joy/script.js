const todoList = ['Clean room', 'Grocery Shopping', 'Eat something'];
todoList.push('Quit The Dollar General');
console.log(todoList);
todoList.shift();
console.log(todoList);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evens = [];

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         evens.push(number);
//     }
// }

// console.log(evens);

// const numbers = [1, 2, 3, 4];
// numbers[0] = 2;
// numbers[1] = 3;
// numbers[2] = 1;
// numbers[3] = 4;
// console.log(numbers);


const numbers = [1, 2, 3, 4, 5, 6];
let count = 6;

while (count > 0) {
    console.log(count);
    count--;
};

const names = ['Katya', 'Curie', 'Basil'];
console.log(`Welcome to the Bagel Demension ${'Basil'}!`);
console.log(`Welcome back to the rest of your life ${'Curie'}, here, take a tazer!`);
console.log(`Hope you have fun with the terrifying Eldritch magic ${'Katya'}!`);