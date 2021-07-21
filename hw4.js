// Функции
/* 1.	Напишите функцию max, которая сравнивает два числа и возвращает большее: 
console.log( max(0, -1) ); // 0 */

function max(num1, num2) {
    if (num1 > num2) {
       return num1;
    } else if (num1 < num2) {
        return num2;
    } else {
        console.log(num1 + ' и ' + num2 + 'равны или вы ввели не число');
    }
}
console.log(max(0, -1));

/*2.	Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:
console.log( min(0, -1, 100, 500, 100500) ); // -1 */

function min() {
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
       if (arguments[i] < min) {
         min = arguments[i];
       }
    }
   return min;
   }

/*3.	Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), 
каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции массивов:	
a.	Отфильтруйте пользователей младше 18 лет
b.	Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
c.	Сформируйте новый массив, который содержит только полное имя пользователей
 */

let users = [ 
    {firstname: 'John', lastname: 'Doe', age: 31}, 
    {firstname: 'John1', lastname: 'Doe1', age: 52}, 
    {firstname: 'John2', lastname: 'Doe2', age: 8}, 
    {firstname: 'John3', lastname: 'Doe3', age: 17}, 
    {firstname: 'John4', lastname: 'Doe4', age: 23},  
    {firstname: 'John5', lastname: 'Doe5', age: 4}, 
    {firstname: 'John6', lastname: 'Doe6', age: 9}, 
]; 
 
let yearsOld = users.filter(users => users.age < 18); 
console.log(yearsOld);

let con = users.map(function (user) {
    user.fullName = user.firstname + ' ' + user.lastname;
    return user;
});
console.log(con);

let newFullName = [];
users.forEach(function (item) {
    newFullName.push(item.fullName);
    return item;
});
console.log(newFullName);

/*4.	Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент. */

function delFirstElement(arr) {
    arr.splice(0, 1);
  
return arr;
}

console.log(delFirstElement([7, 3, 19, 5, 2, 3, 4, 5]));

/*5.	Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов. */

function pus(arr){

    arr = arr.concat([12, 64, 7]);
    return arr;
}

console.log(pus([1, 3, 5])); 

/*6.	Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. 
Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект. 
var source = {firstname: 'Tom', age: 10}
var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}
*/

function extend(sourse) {
    let obj = {};

    for (let i = 1; i < arguments.length; i++) {
        obj = {
            ...obj,
            ...arguments[i]
        };
    }

    return {
        ...sourse,
        ...obj
    }
}

let source = {firstname: 'Tom', age: 10};
let s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});

console.log(source);
console.log(s);

/*7.	Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры, 
если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том,
что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр не передан, 
то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в консоле текст в формате: 
				<имя_автора>, <дата>
				<текст_сообщения>
setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');
 */

function setComment(date, message, author = 'Anonymous') { 
    if (!date && !message) { 
        return alert('Данные переданы некорректно'); 
    } 
    console.log(author + ', ' + date + '\n' + message); 
} 
setComment(new Date, 'Everything is ok', 'John'); 
setComment('2016-11-02', 'You could do it better!');

//Замыкания

/*1.	Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() 
для получения текущей временной метки и служит для замера времени выполнения другого кода(код менять, 
видоизменять нельзя, как написан так и должен остаться): 
let timer = createTimer();
alert('!')  // код, время выполнения которого нужно измерить
alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()
*/

function createTimer() {
    let ct1 = performance.now();
    return function () {
        let ct2 = performance.now();
        return (ct2 - ct1);
    };    
}

let timer = createTimer();
alert('!');
alert( timer());

/*2.	Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр и возвращает функцию, 
которая добавляет к первому параметру второй. Функция работает по следующему принципу: 
var hello = createAdder('Hello, ');
alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry

var plus = createAdder(5);
alert( plus(1) ); // 6
alert( plus(5) ); // 10
*/

function createAdder(arg) {
    return function (arg1) {
        return (arg + arg1);
       
    }
}

let hallo = createAdder('Hallo, ');
alert(hallo('John'));
alert(hallo('Harry'));

let plus = createAdder(5);
alert(plus(1));
alert(plus(5));