// let obj1 ={};
// let obj2 = new Object();
// let user = {
//     name: 'Vasya',
//     age: 15,
//     isAdmin: false,
//     'like dogs': true
// }
// let key = prompt('Enter key', 'address');
// user[key] = 'Qwerty123'
// user.name = 'User1';
// user.surname = 'Petrov';
// delete user.age;
// console.log(user);

// function makeUser(name, age){
//     return {name, age}
// }
// let user = makeUser('Vasya', 20)
// console.log(user)


// let user = {
//     name: 'Vasya',
//     age: 15,
//     'is Admin': false,
// }
// let adress = {
//     'street': 'Shishkina'
// }
// let admin = {};
// // for (let key in user){
// //     admin[key] = user[key];
// // }
// Object.assign(admin,user,adress)
// admin.name = 'admin'
// admin['is Admin'] = true
// console.log(user)
// console.log(admin)

// let user = {
//     name: 'Vasya',
//     age: 16,
//     'is Admin': false,

//     say_hello(){
//         return(`Hello ${this.name}, ${this.age + 100}`)
//     }
// }
// user.say_helllo()
// let admin = Object.assign({}, user)
// admin.name = 'Admin';
// admin.age = 25
// console.log(admin)
// console.log(admin['say_hello']())

// let arrow = () => {}

// function newUser(name, age){
//     return {name, age}
// }
// function hello(){
//     return (`Hello ${this.name}, ${this.age + 100}`)
// }
// let  manager = new newUser('manager', 20)
// manager['is Admin'] = false
// manager['say_hello'] = hello
// console.log(hello())
// console.log(manager.say_hello())

// let user = {
//     name: 'Vasya',
//     age: 16,
//     address: {
//         street: 'Shishkina',
//         house: 15,
//         flat: 10
//     }
// }
// console.log(user?.address?.street)

// let array = []
// let array2 = new Array()
// let array3 = [1,2,3,4,5]

// console.log(array3[0])
// console.log(array3.length)
// array3[0] = 100
// delete array3[1]
// array3[array3.length] = 500
// array3[array3.length] = 600
// console.log(array3)

// let arr = [
//     {name: 'Vasya', age: 15},
//     {name: 'Admin', age: 15},
//     {name: 'manager', age: 15},
//     15
// ]
// arr.forEach((elem) => console.log(elem.age))
// let arrow = () => {}
// console.log(arr.includes(15))

// arr.pop()

// console.log('added elem', arr.shift())
// console.log('added elem', arr.unshift(42))
// console.log('left', arr)

// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }
// for (let i in arr){
//     console.log(arr[i])
// }

// for (let item of arr){
//     console.log(i)
// }

// let matrix = [
//     [
//         [1,2,3],
//         [1,2,3],
//         [1,2,3]
//     ],
//     [4,5,6],
//     [7,8,9],
// ]
// // matrix[1] = 'Qwerty-123'
// // console.log(matrix[0][2][1])
// // console.log(null == 0)
// // console.log(0,0,arr)
// matrix.splice(matrix.length -2,2, arr)
// console.log(matrix)

// let arr = [
//     15,
//     1,
//     2,
//     3,
//     15
// ]
// let el = arr.find(item => item == 15)
// console.log(el)
// let res = arr.filter((item) => item < 10)
// console.log(res)
// let res = arr.map(function(item, index, arr){
//     return item*2
// })
// console.log(res)


// let str = 'sdg,hkkn,pogh,pogho';
// let arr2 = str.split(',')
// console.log(arr.join('!  '))
// let res = arr.reduce((acc, item) => acc*item, 1)
// console.log(res)

// Задание 1

// 1.1

// let str = [
//     'Привет, ',
//     'мир',
//     '!'
// ]
// console.log(str.join(''))

// 1.2

// let str = [
//     'Привет, ',
//     'мир',
//     '!'
// ]
// let text = str.join('')
// console.log(text)

// 1.3

// let str = [
//     'Привет, ',
//     'мир',
//     '!'
// ]
// str[0] = 'Пока, '
// console.log(str.join(''))

//  1.4

// let obj = {
//     'Петя': 12000,
//     'Коля': 26000,
// }
// console.log(`Зарплата Пети: ${obj.Петя} руб.`)
// console.log(`Зарплата Коли: ${obj.Коля} руб.`)

// 1.5

// var arr = {
//     'ru': ['голубой', 'красный', 'зелёный'],
//     'en': ['blue', 'red', 'green']
// };
// console.log(arr?.ru[1])

// Задание 2

// 2.1

// let arr = ['a', 'b', 'c']
// alert(arr)

// 2.2

// let arr = ['a', 'b', 'c'];
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

// 2.3

// let arr = ['a', 'b', 'c', 'd'];
// alert(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`)

// 2.4

// let arr = [2, 5, 3, 9];
// let result = arr[0]*arr[1]+arr[2]*arr[3]
// alert(result)

// Задание 3

// 3.1

// var obj = {a:1, b:2, c:3};
// alert(obj.c)
// alert(obj['c'])

// 3.2

// var obj = {Коля: '1000', Вася: '500', Петя: '200'}
// let result = Object.keys(obj)
// console.log(`${result[0]} получает ${obj.Коля} руб.`)
// console.log(`${result[2]} получает ${obj.Петя} руб.`)

// 3.3

// var obj = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
//   };
// console.log(`Текущий день недели - это ${obj[new Date().getDay()]}`)

// 3.4

// var obj = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// };
// let day = 3;
// console.log(obj[day])

// Задание 4

// 4.1

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// alert(arr[1][0])

// 4.2

// var obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
// console.log(obj?.js[0])

// 4.3

// var obj = {
//     'ru': ['Понедельник', 'Вторник', 'Среда', 'Четеверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// }
// console.log(obj?.ru[0], obj?.en[2])

// 4.4

// var obj = {
//     'ru': {
//         1: 'Понедельник',
//         2: 'Вторник',
//         3: 'Среда',
//         4: 'Четверг',
//         5: 'Пятница',
//         6: 'Суббота',
//         7: 'Воскресенье'
//     },
//     'en': {
//         1: 'Monday',
//         2: 'Tuesday',
//         3: 'Wednesday',
//         4: 'Thursday',
//         5: 'Friday',
//         6: 'Saturday',
//         7: 'Sunday'
//     },
// };
// let lang = 'ru';
// let day = 3;
// console.log(obj[lang][day])

