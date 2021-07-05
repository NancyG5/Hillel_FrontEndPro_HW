// Массивы и объекты

/* 1.	Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. 
Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert */

let arra = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
let sum = 0;
 for (let i = 0; i <arra.length; i++) {    
  if (!isNaN(arra[i])) {
   sum += parseInt(arra[i]);
  }

 }
alert(sum);

/* 2.	Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. 
Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, 
не используя функцию Math.pow(). */

let mass = [];
let mass1 = [];

for (let i = 0; i < 10; i++) {
 let mass2 = (Math.random() * 10).toFixed(2);
 let a = 1;
  mass.push(mass2);

for (let j = 0; j < 5; j++) {
 a *= mass2;
    }
 mass1.push(a);
}
console.log(mass);
console.log(mass1);

/* 3.	Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
a.	Добавьте в начало массива значение ‘Backbone.js’
b.	Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
c.	Добавьте в массив значение ‘CommonJS’ вторым элементом
d.	Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее” */

let framework = ['AngularJS', 'jQuery'];

 framework.unshift('Backbone.js');
 framework.push('ReactJS', 'Vue.js');
 framework.splice(1, 0, 'CommonJS');

for (let i = 0; i < framework.length; i++) {
    if (framework[i] === 'jQuery') {
     alert(framework[i] + ' - Это здесь лишнее');
     framework.splice(i,1);
    }
}
console.log(framework);

/* 4.	Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. 
Разбейте ее на массив слов, и переставьте слова в порядке ‘Как Жак звонарь однажды сломал головой фонарь’ 
с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку 
и выведите в alert исходный и итоговый варианты. */

let str = 'Как однажды Жак звонарь сломал фонарь головой' 
let arr = str.split(' ') 
 
arr.splice(arr.indexOf('головой'), 1);
arr.splice(5, 0, 'головой');

arr.splice(arr.indexOf('однажды'), 1);
arr.splice(3,0,'однажды');

arr.toString();

alert(`${str}\n${arr.join(' ')}`);

/* 5.	Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. 
С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран.
Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt. */

let person = {
  name: 'Nancy',
  age: 25,
  country: 'Ukraine',
  city: 'Kharkov',
};

let property = prompt('Введи свойство');

if (property in person) {
  alert(person[property]);
} else {
  person[property] = prompt('Введи значение свойства');
}

console.log(person);

/* 6.	Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, 
прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. 
Добавьте этот гаджет персоне, созданной ранее.*/

let phone = {
  brand: prompt('Введите марку телефона'),
  model: prompt('Введите модель телефона'),
  resolution: prompt('Введите разрешение экрана телефона'),
  color: prompt('Введите цвет телефона'),
};
person.phone = phone;

console.log(person);

/* 7.	Создайте объект dates для хранения дат. Первая дата – текущая, new Date. 
Вторая дата – текущая дата минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. 
Проверьте, попадает ли введенная дата в диапазон дат объекта dates. */

let dates = {}

dates.today = new Date;
dates.lastYear = new Date(today.setFullYear(today.getFullYear() - 1)).toDateString(); 

dates.userDate = prompt('Введи дату в виде гггг-мм-дд');

if (+new Date(dates.userDate) <= +new Date(dates.today) && +new Date(dates.userDate) >= +new Date(dates.lastYear)) {
 console.log('Дата попадает в диапазон');
} else {
 console.log('Дата не в диапазоне');
}

/* 8.	Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, 
полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива 
и выведите в alert полученный результат.*/

let arr = [];
let n = 3;
let sum = 0;

for (let i = 0; i < n; i++) {
  let a = prompt('Введи что-то');
  arr.push(a);

if (!isNaN(arr[i])) {
  sum += parseInt(arr[i]);
  }
} 
console.log(arr);
alert(sum);

/* 9.	Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:*/

let table = [];

for (let i = 1; i <= 10; i++) {
   table[i-1] = [];

     for (let j = 1; j <= 10; j++) {
         table[i-1].push(`${i} x ${j} = ${i * j}`);
     }
 }

console.log(table);

/* 10.	Создайте структуру данных, полностью описывающую html-разметку картинки.*/

let img = {
  src: 'https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  alt: "",
  style: 'border: 1px solid #ccc',
  width: '200',
 };
 
 console.log(img);