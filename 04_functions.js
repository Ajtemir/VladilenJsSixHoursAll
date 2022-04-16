// // function declaration
//
// function greet(name){
//     console.log()
// }
// // function expression
//
// const greet2 = function greet2()
// {
//
// }

// anonymous function
// let counter = 0
// const interval = setInterval(function(){
//     if(counter === 5){
//         clearInterval(interval)
//     }
//     else {
//         console.log(++counter)
//     }
// },1000)
const name = "Vladimir"
// стрелочные фунции
const arrow = (name) => {
    console.log("Hello - ", name)
}

const pow2 = num => num ** 2

arrow(name)
console.log(pow2(6))
const sum = (a = 5, b = a * 2) => a+b
console.log(sum())

function createMember(name) {
    return function (lastName)
    {
        console.log(name + lastName)
    }
}

// замыкание
const logWithLastName = createMember('Vladilen')
console.log(logWithLastName(' Minin'))


