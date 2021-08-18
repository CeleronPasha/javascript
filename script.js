// // Виды значений переменных
// /* 
// Number
// String
// Boolean
// Object
// Null
// Underfiend
// */

// // Урок с операторами if else

// var currentYear = 2018
// var carName = 'Ford'
// var carYear = '2008'
// var carAge = currentYear - carYear

// //если возвраст машины меньше 5 лет... 
// //если возвраст машины больше или равно 5 лет и меньше или равно 10 лет...
// //иначе другое сообщение 

// if (carAge < 5) {
//     console.log(carName + ' младше 5 лет')
// } else if (carAge >= 5 && carAge <= 10) {
//     console.log(carName + ' больше или равен 5 годам или меньше или равен 10 годам')
// } else {
//     console.log('возвраст ' + carName + ' равняеться' + carAge + ' годам')
// }

// //0 null NaN undefiend урок с тернарными операторами

// //  if (0) {
// //     console.log('значение true')
// // } else {
// //     console.log('значение false')
// // } 

// 4 ? console.log('значение true') : console.log('значение false')

// var personAge = 20
 
// var message = personAge < 18
//     ? 'Человек не совершеннолетний'
//     : 'Совершенно летний человек'

// console.log(message)

// var carColor = 'red'

// //проверить какого цвета машина switch case операторы

// // if (carColor === 'green') {
// //     console.log('цвет машины зеленый')
// // } else if (carColor === 'yellow') {
// //     console.log('цвет машины желтый')
// // } else if (carColor === 'red') {
// //     console.log('цвет машины красный')
// // } else {
// //     console.log(цвет машины не определён)
// // }

// switch (carColor) {
//     case 'green': 
//         console.log('цвет машины зеленый')
//         break
//     case 'yellow':
//         console.log('цвет машины желтый')
//         break
//     case 'red':
//         console.log('цвет машины крассный')
//         break
//     default: 
//     console.log('цвет машины не определён')
// }

//Урок функции 

// var carName = 'Skoda'
// var carYear = 2010
// var personYear = 1990

// // старше 10 лет или младше 10 лет вывести в консоль

// function calculateAge (year) {
//     var currentYear = 2018
//     var result = currentYear - year
//     return result
// }

// function checkAndLogAge (year) {
//     if (calculateAge (year) < 10) {
//         console.log('Возраст меньше 10 лет')
//     } else {
//         console.log('Возвраст больше 10 лет')
//     }
// }

// checkAndLogAge(carYear)
// checkAndLogAge(personYear)

// function sayHello (name) {
//     console.log('привет, ' + name)
// }

// sayHello ('Елена')

// //Строки

// var str1 = 'Hello World'
// var str2 = "Hello World2"

// var personName = 'Viktor'
// var message = 'Человека зовут \'' + personName + '\''
// console.log(str1)
// console.log(message)

// var newMessage = 'Hello World!!!'
// console.log (newMessage.length)
// console.log (newMessage.toUpperCase())
// console.log (newMessage.toLocaleLowerCase())
// console.log (newMessage.charAt(3))
// console.log (newMessage.indexOf('World'))
// console.log (newMessage.substr(1,4))
// console.log (newMessage.substr(newMessage.indexOf('World'), 5))

// Числа

// console.log(42)
// console.log(-42)
// console.log(1.5)
// console.log(-8 / 3)
// console.log(0xAB)
// console.log(2e3)
// console.log(NaN)
// console.log(123 / 0)

// var fortyTwo = 42
// var delta = 8 / 3

// console.log(delta.toFixed(3))
// console.log(fortyTwo.toString())

// // Урок Массивы

// var cars = [
//     'Ford',
//     'Mazda',
//     'Skoda',
//     'BMW'
// ]

// var any = [
//     42,
//     'Aplle',
//     {a:1}
// ]

// console.log(any)
// console.log(cars)
// console.log(cars[1]) 
// cars.push('Audi')
// var audi = (cars.pop())
// console.log(cars)
// cars.pop()
// console.log(cars)
// var ford = (cars.shift())
// console.log(cars,ford)

// cars.unshift(audi)
// console.log(cars)
// var index = cars.indexOf('Audi')
// var Audi = cars [index]

// console.log(audi)

// Обьекты урок

var person = {
    name: 'Vasya',
    year: 1990,
    family: ['Helena', 'Igor'],
    cars: { 
        year: 2010, 
        model: 'Ford'
    },
    calculetAge: function() {
        this.age = 2018 - this.year
    }
}

console.log(person)
console.log(person.name)
console.log(person['year'])
var field = 'cars'
console.log(person[field])
console.log(person[field].year)
person.year=1993
console.log(person)
person.calculetAge()
console.log(person)