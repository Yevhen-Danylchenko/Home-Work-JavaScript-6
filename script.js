// ============================= Завдання 1 ===================================

// function multiplyNumbers(a, b) {
//     if(String.a === a || String.b === b) {
//         throw new Error(alert('Введіть числа!'));
//     }
//     else {
//         return a * b;
//     }
// }

// console.log(multiplyNumbers(2,7));

// =============================== Завдання 2 ====================================


// function getUserName() {
//     let name = prompt("Введіть своє ім'я:");
//     return name;
// }

// console.log(getUserName());

// ================================ Завдання 3 =================================

// function isAdult() {
//     let age = parseInt(prompt('Вкажіть свій вік:'));
//     if (age >= 18) {
//         alert('Ви повнолітній.');
//     }
//     else {
//         alert('Ви неповнолітній.');
//     }
// }

// ============================ Завдання 4 =============================

// let arr = [1,3,6,9,12];

// let num = 7;

// function addNumberToArray(arr, num) {
   
//     arr.push(num);
//     return arr;

// }

// console.log(addNumberToArray(arr, num));

// =============================== Завдання 5 ===================================


// let score = parseInt(prompt('Введіть оцінку:'));

// function calculateGrade(score) {
//     switch(true){
//         case score <= 20 && score > 0 :
//             console.log('D');
//             break
          
//         case score <= 40 && score > 20 :
//             console.log('C');
//             break
          
//         case score <= 80 && score > 40 :
//             console.log('B');
//             break

//         case score <= 100 && score > 80 :
//             console.log('A');
//             break

//         default :
//             throw new Error('Некорректно введена оцінка!');

//     }
// }

// console.log(calculateGrade(score));

// ================================ Завдання 6 =================================


// function confirmExit() {
//     let conf = confirm('Ви підтверджуєте вихід з сайту?');
//     if (conf === true) {
//         alert('Ви підтвердили вихід.');
//     }
//     else if (conf === false) {
//         alert('Ви відхилили вихід.');
//     }
// }

// confirmExit()

// ================================= Завдання 7 ==================================


// function sumArray(...arr) {
//     const result = arr.reduce((total,arr)=>total+arr,0);
//     return result
// }

// console.log(sumArray(12,45,34,67,89));


// ================================ Завдання 8 =================================

// let arr = [2,7,-4,5,9,-16,37,2];

// function findMaxNumber(arr) {
//     const result = Math.max.apply(null, arr);
//     return result
// }

// console.log(findMaxNumber(arr));

// ============================ Завдання 9 =========================================

// function compareTwoNumbers(a, b) {
//     if (a > b) {
//         return a;
//     }
//     else {
//         return b;
//     }
// }

// console.log(compareTwoNumbers(4,9));

// =========================== Завдання 10 ===================================

// let str = prompt('Введіть рядок:');

// function reverseString(str) {
//     str = str.split('').reverse().join('');
//     return str;
// }

// console.log(reverseString(str));


// ============================== Завдання 11 ===============================

// let arr = [12,9,-4,3,1,7,6,10];
// let arrNew = [];

// function getOddNumbers(arr) {

//     for (i of arr) {
//         if (i%2==0) {
//             arrNew.push(i);
//         }
//     }
//     return arrNew;
// }

// console.log(getOddNumbers(arr));


// ================================= Завдання 12 =========================

// let greeting = prompt('Введіть привітання:');
// let name = prompt("Введить ім'я:");

// const greetUser = {
//     greeting : greeting,
//     name : name,
//     greet() {
//         alert(`${this.greeting}  ${this.name}`);
//     }
// }

// greetUser.greet();

// name = prompt("Введить ім'я:");

// const anotherGreetUser = {
//     greeting : greeting,
//     name : name,
// }

// greetUser.greet.call(anotherGreetUser);

// ============================== Завдання 13 ==============================

// const mass1 = [12,45,33,89,90,2,5,7];

// function sumUsingApply() {
//     return Math.apply(null, mass1);    
// }

// console.log(sumUsingApply());


// ============================= Завдання 14 ===============================

// let num1 = parseFloat(prompt('Введіть перше число:'));
// let num2 = parseFloat(prompt('Введіть друге число:'));

// const multiplyWithBind = {
//     num1 : num1,
//     num2 : num2,
//     multipl() {
//         console.log(num1*num2);
//     }
// }

// const multipl = {num1,num2};

// const multiply = multiplyWithBind.multipl.bind(multipl);

// multiply();


// ============================= Завдання 15 ==============================

// let str = prompt('Введіть рядок:');

// function isPalindrome(str) {
//     if(str === str.split('').reverse().join('')) {
//         alert('Це паліндром.');
//     }
//     else {
//         alert('Це не паліндром.');
//     }
// }

// isPalindrome(str);


// ============================== Завдання 16 ===============================

// let arr = [-1, 0, 9, 4, -3, -2, 5, 7, 14,];
// let mass = [];

// function getPositiveNumbers(arr) {
//     for (i of arr) {
//         if (i > 0) {
//             mass.push(i);
//         }
//     }
//     return mass;
// }

// console.log(getPositiveNumbers(arr));

// ============================== Завдання 17 ============================

// let arr = [23,99,-3,0,2,4,7]

// function printArray(arr) {
//     for (i of arr) {
//         alert(i);
//     }
// }

// printArray(arr);

// =============================== Завдання 18 ============================

// let arr = [12,6,7,8,34,24,3]
// let num = 0;
// let num1 = 0;

// function getAverage(arr) {
//     for(i of arr) {
//         num1 += i;
//         num ++;
//     }
//     num1 = num1/num;
//     return num1;
// }

// console.log(getAverage(arr));


// ============================== Завдання 19 =============================

// let password = prompt('Введіть пароль:');

// let pass = 'pass';

// function checkPassword(password) {
//     if (password === pass) {
//         alert('Доступ дозволено.');
//     }

//     else {
//         alert('Доступ заборонено!');
//     }
// }

// checkPassword(password);


// =============================== Завдання 20 ============================

// let n = parseFloat(prompt('Введіть число:'));

// function fizzBuzz(n) {
//     if (n%3==0 && n%5!=0){
//         console.log('Fizz');
//     }
//     else if (n%5==0 && n%3!=0){
//         console.log('Buzz');
//     }
//     else if (n%3==0 && n%5==0) {
//         console.log('FizzBuzz');
//     }
// }

// fizzBuzz(n);


