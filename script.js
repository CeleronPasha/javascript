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

// var person = {
//     name: 'Vasya',
//     year: 1990,
//     family: ['Helena', 'Igor'],
//     cars: { 
//         year: 2010, 
//         model: 'Ford'
//     },
//     calculetAge: function() {
//         this.age = 2018 - this.year
//     }
// }

// console.log(person)
// console.log(person.name)
// console.log(person['year'])
// var field = 'cars'
// console.log(person[field])
// console.log(person[field].year)
// person.year=1993
// console.log(person)
// person.calculetAge()
// console.log(person)

// Урок Циклы

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// numbers.push('Not a number')
// numbers.push('New line')

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 ===0) { // Вывод четных елементов с массива i
//         console.log(numbers[i])
//     }
// }

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !==0) { // Вывод четных елементов с массива i 2й способ
//         continue
//     }
//     console.log(numbers[i])
// }

// numbers.push('String')

// for (var i = 0; i < numbers.length; i++) {
//     if (typeof numbers[i] === 'string') { // остановит цикл break в моменте когда оно наткнется на строчное значение.  
//         break
//     }
//     console.log(numbers[i])
// }

// DOM урок
// var div = document.getElementById('playground')
// var p = document.getElementsByClassName('text')
// var h1 = document.getElementsByTagName('h1')
// console.log(div)
// console.log(p)
// console.log(h1)

// var div = document.querySelector('#playground')
// var p = document.querySelectorAll('.text')
// var h1 = document.querySelector('h1')
// var input = document.querySelector('input')
// console.log(input.value)
// div.innerHTML=('<h2 style="color : red;">From JavaScript</h2>')
// h1.textContent = ('Chenge from JS')
// console.log(div.innerHTML)
// console.log(p)
// console.log(h1.textContent)

// <!-- Урок атрибуты и классы-->

//  var a = document.querySelector('a')
//  var oldHref = a.getAttribute('href')
//  a.setAttribute('href', 'https://www.ya.ru')
//  a.setAttribute('title', 'Go To Yandex')
//  a.textContent=('Yandex')
//  console.log(a)

//  var box1 = document.querySelector('#box1')
//  var box2 = document.querySelector('#box2')

//  box1.classList.add('red')
// //  box2.classList.add('blue')
 
//  var hasClass = box2.classList.contains('blue')
//  console.log(hasClass)

//  if (hasClass) {
//     box2.classList.remove('blue')
//  } else {
//     box2.classList.add('blue')
//  }

// Создание событий

// var button = document.querySelector('button')
// var h1 = document.querySelector('h1')
// var input = document.querySelector('input')

// function buttonHandler() {
//     console.log('clicked!')
//     h1.textContent = input.value
// }


// h1.addEventListener('mouseenter', function() {
//     this.style.color = 'red'
//     this.style.backgroundColor = 'yellow'
// })

// h1.addEventListener('mouseleave', function() {
//     this.style.color = 'black'
//     this.style.backgroundColor = 'transparent'
// })

// button.addEventListener('click', buttonHandler)


// Обьекты всплытия и погружения

// var divs = document.querySelectorAll('div')
// var link = document.querySelector('a')

// for (var i = 0; i<divs.length; i++) {
//     divs[i].addEventListener('click', function(event) {
//         event.stopPropagation()
//         console.log(this.getAttribute('id'))
//     })
// }

// link.addEventListener('click', HandleLinkClick)

// function HandleLinkClick(event) {
//     event.preventDefault()

//     var div = divs[0]
   
//     div.style.display = div.style.display === 'none'
//     ? 'flex'
//     : 'none'
//     console.log (div.style.display)
// }\

// Делигированые собития

//

// for (var i=0; i<p.length; i++) {
//   p[i].addEventListener('click', function(event) {
//     event.target.style.color = 'blue'
//   })
// }

// document.getElementById('wrapper').addEventListener('click', function(event) {
//   var tagName = event.target.tagName.toLowerCase()
//   if (tagName==='p') {
//     event.target.style.color = 'red'
//   }

//   if (event.target.classList.contains('color')) {
//     event.target.style.color = 'blue'
//   }
// })

// Взаимодействие с пользователем

document.getElementById('alert').addEventListener('click', function(){
  alert('clicked')
})

document.getElementById('confirm').addEventListener('click', function(){
  var decision = confirm('clicked?')
  if (decision) {
    alert('clicked')
  } else {
    alert ('dont clicked')
  }
})

document.getElementById('prompt').addEventListener('click', function(){
  var age = prompt('Введите свой возраст')
  if (age >= 18) {
    alert ( 'Вы совершеннолетний')
  } else {
    alert ('Вы не совершеннолетний')
  }
})

// Методы массивов

var str = '1,2,3,4,5,6,7,8'

var array = str.split(',')
console.log(str)
console.log(array)
console.log(array.join(';'))
console.log(array.reverse)

array.splice(3, 0, '23')
console.log(array)

var newArray = array.concat([1,2])
console.log(newArray)

var objArr = [
  {name: 'Max', age: 27},
  {name: 'Elena', age: 18},
  {name: 'Viktor', age: 20}
]
console.log (objArr)

var foundPerson = objArr.find(function(person) {
  return person.age === 20
})

console.log(foundPerson)

var oddArray = [1,2,3,4,5,6,7,8,9].filter(function(i){
  return i % 2 !==0
})

console.log(oddArray)

var numArray = array.map(function(i) {
  return i * 2
})
console.log(numArray)