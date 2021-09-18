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

// document.getElementById('alert').addEventListener('click', function(){
//   alert('clicked')
// })

// document.getElementById('confirm').addEventListener('click', function(){
//   var decision = confirm('clicked?')
//   if (decision) {
//     alert('clicked')
//   } else {
//     alert ('dont clicked')
//   }
// })

// document.getElementById('prompt').addEventListener('click', function(){
//   var age = prompt('Введите свой возраст')
//   if (age >= 18) {
//     alert ( 'Вы совершеннолетний')
//   } else {
//     alert ('Вы не совершеннолетний')
//   }
// })

// Методы массивов

// var str = '1,2,3,4,5,6,7,8'

// var array = str.split(',')
// console.log(str)
// console.log(array)
// console.log(array.join(';'))
// console.log(array.reverse)

// array.splice(3, 0, '23')
// console.log(array)

// var newArray = array.concat([1,2])
// console.log(newArray)

// var objArr = [
//   {name: 'Max', age: 27},
//   {name: 'Elena', age: 18},
//   {name: 'Viktor', age: 20}
// ]
// console.log (objArr)

// var foundPerson = objArr.find(function(person) {
//   return person.age === 20
// })

// console.log(foundPerson)

// var oddArray = [1,2,3,4,5,6,7,8,9].filter(function(i){
//   return i % 2 !==0
// })

// console.log(oddArray)

// var numArray = array.map(function(i) {
//   return i * 2
// })
// console.log(numArray)

// var person = {
//   name: 'Max',
//   age: 26,
//   car: {
//     model: 'ford'
//   },
//   job: 'FrontEnd',
//   friends: ['Helena', 'Igor']
// }
//  var str = JSON.stringify(person)
// console.log(str)

// console.log (JSON.parse(str))

// Таймштамп это текущее время в миллисекундах от 1 января 1970 года
// var date = new Date()
// console.log (date)

// localStorage

// document.querySelector('button').addEventListener('click', function(event){

//   var value = document.querySelector('input').value

//   var obj = {
//     text: value
//   }
//   localStorage.setItem('header text', JSON.stringify(obj))
// })

// document.addEventListener('DOMContentLoaded', function(){
  
//   var obj 
//   try {
//   JSON.parse(localStorage.getItem ('header text'))
// }
// catch (e) {
//   obj = {}
// }
  

//   if (obj && obj.text && obj.text.trim()) {
//     document.querySelector('h1').textContent=(obj.text)
//   }
// })

//Обьекты и функции

// var car = {
//   name: 'Ford',
//   year: 2015,
//   person : {

//   }
// }

// // car.__proto__ => Object.prototypy
// // [masiv] => array => Object
// console.log(car)

// function Car(name, year) {
//  this.name = name
//  this.year = year 
// }

// Car.prototype.getAge = function () {
//   return new Date().getFullYear() - this.year
// }

// Car.prototype.color = 'black'

// var ford = new Car('Ford', 2015)
// var bmw = new Car('BMW', 2017)
// ford.color = 'red'
// console.log(ford)
// console.log(bmw)

// var ford = Object.create({
//   calculateDistancePerYear: function() {
//     Object.defineProperty(this, 'distancePerYear', {
//       value: Math.ceil(this.distance / this.age),
//       enumerable: false,
//       writable: false,
//       configurable: false
//     })
//   }
// }, {
//   name: {value: 'Ford',
//          enumerable: true,
//          writable: false,
//          configurable: false
// },
//   model: {value: 'Focus',
//           enumerable: true,
//           writable: false,
//           configurable: false
// },
//   year: {value: 2015,
//          enumerable: true,
//          writable: false,
//          configurable: false
//   },
//   distance: {value: 120500,
//              enumerable: true,
//              writable: true,
//              configurable: false
//   },
//   age: {
//     enumerable: true,
//     get: function() {
//       console.log('Получаем Возраст')
//       return new Date().getFullYear() - this.year
//     },
//     set: function(){
//       console.log('Устанавливаем значение')
//     }
//   }
// } )

// ford.calculateDistancePerYear()

// for (var key in ford) {
//   if(ford.hasOwnProperty(key)) {
//     console.log(key, ford[key])
//   }

// }

// var person = {
//   name: 'Max',
//   age: 28,
//   job: 'FrontEnd'
// }

// for (var key in person) {
//   if(person.hasOwnProperty(key))
//   console.log(person[key])
// }

// Object.keys(person).forEach(function(key) {
//   console.log(person[key
//   ])

// Замыкания

// var createCounter = function(counterName) {
//   var counter = 0
//   return{
//     increment: function() {
//       counter++
//     },
//     decrement: function() {
//       counter--
//     },
//     getCounter: function() {
//       return counter
//     }
//   }
// }

// var counterA = createCounter('Counter A')
// var counterB = createCounter('Counter B')

// counterA.increment()
// counterA.increment()
// counterA.increment()

// counterB.decrement()
// counterB.decrement()

// Контекст 

// var person = {
//   age: 28,
//   name: 'Max',
//   job: 'Frontend',
//   displayInfo: function(ms) {
    

//     setTimeout(function() {
//       console.log('Name:', this.name)
//       console.log('Name:', this.job)
//       console.log('age:', this.age)
//     }.bind(this), ms)
//   }
// }

// person.displayInfo(5000)

// привязка контекста

// function printObject(objName) {
//   console.log('Printing object:', objName)
//  for (var key in this) {
//    if (this.hasOwnProperty(key)) {
//       console.log('[' + key + ']', this[key])
//    }
//  }
// }



// var person = {
//   firstName: 'Max',
//   job: 'Backend',
//   age: 29,
//   friends: ['Elena', 'Igor']
// }

// var car = {
//   name: 'Ford',
//   model: 'Focus',
//   year: 2017
// }


// var printPerson = printObject.bind(person)
// printPerson('Person') // 1i method вызыввает и возвращает функцию обьект и тд

// printObject.call(car, 'Car') // 2i method сразу вызывает и сразу показывает функцию обьект и тд

// printObject.apply(person, ['Person']) //3i method сразу вызывает с конечным рядом параметров

// ЗАДАЧА 
//  Реализуйте возможность используя прототип, чтобы у каждого массива был новый метод,
//  позволяющий удваивать значение каждого элемента с учетом типа данных таким образом, чтобы:
//  1. Для чисел это возведение в квадрат
//  2. для строк это удваивание строки
//  3. Метод не изменял существующий массив и возвращал новый

//  пример:
//  [1, 2, 3] => [1, 4, ,9]
//  [5, 'Hello', 6] => [25, 'HelloHello', 36]

// var a = [1, 2, 3]
// var b = [5, 'Hello', 6]

// Array.prototype.double = function() {
//   var newArray = this.map(function(item) {
//     if (typeof item === 'number') {
//       return Math.pow(item, 2)
//     }

//     if (typeof item === 'string') {
//       return item += item
//     }
//   })

//   return newArray
// }


// var newA = a.double()
// var newB = b.double()

// console.log('A', newA)
// console.log('B', newB)

//// ECMA-SCRIPT-6 /////

// переменный let i const

//let // позволяет создавать переменные с возможностью менять значения
//const // позволяет создавать переменную без возможности менять значение



// const randomNames = ['Елена', 'pasha', 'Oleg', 'dmiytry']
// const randomName = randomNames [Math.floor(Math.random() * randomNames.length )]

// const randomAbuses = ['Penis', 'chmo', 'jopa', 'shlypa']
// const randomAbuse = randomAbuses [Math.floor(Math.random() * randomAbuses.length )]


// let abuse = randomName + ' ' + randomAbuse
// console.log(abuse)

// function getAge(year) {
//   const current = new Date().getFullYear()
//   return current - year
// }

// -----------Стрелочные функции-------

// const calculateAge = (year) => {
//   const current = new Date().getFullYear()
//   return current - year
// }

// const getAge = year => {
//   const current = new Date().getFullYear()
//   return current - year
// }

// const getAge = year => {
//   return new Date().getFullYear() - year
// }

// const getAge = year => new Date().getFullYear() - year

// const logAge = year => console.log(new.Date().getFullYear() - year)

// logAge(1993)

// const person = {
//   age: 25,
//   firstName: 'Maxim',
//   logNameWithTimeout: function () {
//     setTimeout(function() {
//       console.log(this.firstName)
//     }.bind(this), 1000)
//   }
// }

// const person = {
//   age: 25,
//   firstName: 'Maxim',
//   logNameWithTimeout() {
//          setTimeout ( () => {
//       console.log(this.firstName)
//     }, 1000)
//   }
// }

// Параметры по умолчанию ес6

// const createPost = (title, text = 'Default text', date = new Date().toLocaleDateString()) => {
//   return {title, text, date}
// }

// const post = createPost('Скоро НГ!')
// console.log(post)

// Обьекты ес6

// const createCar = (name, model) => ({name, model})


// const ford = createCar('Ford', 'F150')
// console.log(ford)


// const yearField= 'year'

// const bmw = {
//   name: 'BMW',
//   ['model']: 'X6 Sport',
//   [yearField]: 2018,

//   logFields() {
//     const {name, year, model} = this
//     console.log(name, model, year)
//   }
// }

// console.log(bmw)
// bmw.logFields()

// const year = bmw.year
// const {year} = bmw\

// rest and spreat operators

// const form = document.querySelector('form')

// form.addEventListener('submit', event => {

//   event.preventDefault()
  
//   const title = form.title.value
//   const text = form.text.value
//   const description = form.description.value

//   saveForm(title, text, description)

// })

// // operator spread
// // function saveForm (data) {
  
// //   const formData = {
// //     date: new Date().toLocaleDateString(),
// //     ...data
// //   }
// //   console.log('Form data:', formData)
// // }

// // operator rest
// function saveForm (...args) {

//   const [title, text, description] = args
//   const formData = {
//     date: new Date().toLocaleDateString(),
//     title, text, description
//   }
//   console.log('Form data:', formData)
// }


// строки
// const createLink = ({path, name}) => `<a target="_blank" href= ${path} >${name}</a>`


// const ul = document.querySelector('ul')

// const google = `<li>${createLink({path: 'https://www.google.com/', name: 'Google' })}</li>`
// const yandex = `<li>${createLink({path: 'yandex.com', name: "Yandex" })}</li>`

// ul.insertAdjacentHTML('afterbegin', google )
// ul.insertAdjacentHTML('afterbegin', yandex)

// const strToLog = `
//   Hello
//   World
//     I am
//       New tab
// `
// console.log(strToLog)

//класи и наследов
//RootElement <= Box <= instances

// class RootElement {
//   constructor(tagName = 'div') {
//     this.$el = document.createElement(tagName)
//     this.$el.style.marginBottom = '20px'
//   }

//   hide() {
//     this.$el.style.opacity = '0'
//   }

//   show() {
//     this.$el.style.opacity = '1'
//   }

//   append() {
//     document.querySelector('.wrapper').insertAdjacentElement('beforeend', this.$el)
//   }
// }

// class Box extends RootElement {
//   constructor(color, size=150, tagName) {
//     super(tagName)
//     this.color = color
//     this.size = size
//   }
//     create() {
//       this.$el.style.background = this.color
//       this.$el.style.width = this.$el.style.height = `${this.size}px`
//       this.append()
//       return this
//     }
// }

// class Circle extends RootElement {
//   constructor(color) {
//     super()

//     this.color = color
//   }

//   create() {
//     this.$el.style.borderRadius = '50%'
   
//     this.$el.style.width = this.$el.style.height = `120px`
//     this.$el.style.background=this.color
//     this.append()
//     return this
//   }

// }

// const redBox = new Box('red', 100, 'div').create()
// const blueBox = new Box('blue').create()
// const circle = new Circle('green').create()

// circle.$el.addEventListener('mouseenter', () => {
//   circle.hide()
// })

// circle.$el.addEventListener('mouseleave', () => {
//   circle.show()
// })