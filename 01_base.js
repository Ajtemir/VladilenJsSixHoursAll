// 1 Переменные
// ! const a;
// camelCase
// ;
// var name = "Vladilen"
// const lastName = "Minin" // string
// let age = 26 // number
// let firstName = "Vlad"
// const _  = 'fast';
// const $ = 'find';
//
// const isProgrammer = true // boolean
// console.log(name)
// const with5 = 5;

// 2 мутирование
// console.log(age.toString())
// const lastName = prompt("Your lastName")
// console.log('Имя человека: ' + firstName + ', фамилия: ' + lastName)


// 3 операторы
// const currentYear = 2020
// + = -
// ++currentYear++
// c+=a

// 4 типы данных
const isProgrammer = true
const name = 'Vladilen'
const age = 26
let x
console.log(typeof isProgrammer)
console.log(typeof name)
console.log(typeof age)
console.log(typeof x)
console.log(typeof null)
console.log(null)

// 5 приоритеты операций
const fullAge = 26
const birthYear = 1993
const currentTear = 2020
// mdn priority operation

// 6 условные операторы
const courseStatus = 'pending'
if(courseStatus === 'ready')
{
    console.log('Course is ready you already can take')
}
else if(courseStatus === 'pending')
{
    console.log('Course is in developing process')
}
else
{
    console.log('Курс не получился')
}

const num1 = 42
const num2 ='42'

console.log(num1 == num2) // true
console.log(num1 === num2) // false

// тернарное

// 7 булевая логика
// mdn logic operators

// 8 функции
function calculateAge(year) {
    return 2020 - year
}

const myAge = calculateAge(1993)
console.log(myAge)

// 9 Массивы
const cars = ['Mazda','Mercedes','Ford']
cars[0] = 'porshe'
console.log(cars)
let cars2 = new Array('Mazda','Mercedes','Ford')
cars2[5] = 'sfdgh'
console.log(cars2)
console.log(cars.length)

// 10 циклы
for (let i =0;i<cars.length;i++)
{

}

for(let car of cars)
console.log(car)

// 11 объекты
// const person = {
//     firstName : 'Vladilen',
//     lastName : 'Minin',
//     years : 1993,
//     languages : ['Ru', 'En', 'De'],
//     greet : function () {
//         console.log('greet')
//     }
// }
//
// console.log(person.firstName)
// person.greet()





