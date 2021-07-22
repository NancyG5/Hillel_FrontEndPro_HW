//Методы объектов и контекст исполнения функции

/*1.	Создайте объект calculator с методами:
a.	read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
b.	sum() возвращает сумму этих двух значений
c.	multi() возвращает произведение этих двух значений
d.	diff() возвращает разницу
e.	div() возвращает частное

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );
*/

let calculator = {
    read: function () {
        this.x = +prompt('Число');
        this.y = +prompt('Число');
    },
    sum: function () {
        return this.x + this.y;
    },
    multi: function () {
        return this.x * this.y;
    },
    diff: function () {
        return this.x - this.y;
    },
    div: function () {
        return this.x / this.y;
    },
}

calculator.read();
alert(calculator.sum());
alert(calculator.multi());

/*2.	Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), 
при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message. */

let coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function () {
        let coffee = this;
        setTimeout(function() {
            alert(coffee.message);        
}, 3000);
    },
}
coffeeMachine.start();

/*3.	Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения. 
Используйте концепцию chaining для создания цепочки вызовов. 
var current = counter.inc().inc().dec().inc().dec().getValue();
alert(current); // 1
*/

let counter = { 
    counter1:0, 
    inc: function() { 
        this.counter1++; 
        return this; 
    }, 
    dec: function() { 
        this.counter1--; 
        return this; 
    }, 
    getValue: function() { 
        return this.counter1; 
    }, 
}; 
let current = counter.inc().inc().dec().inc().dec().getValue(); 
alert(current);

/*4.	Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. 
Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. 
Для расчетов все методы используют функционал ранее созданного калькулятора. 

alert(me.getSum(1, 1));
alert(me.getDiv(1, 0));
*/

let info = {
     
    getSum: function(x, y) {
        this.x = x;
        this.y = y;
        return this.x + '+' + this.y + '=' + calculator.sum.call(this, this.x, this.y);
    },
    getDiff: function(x, y) {
        this.x = x;
        this.y = y;
        return this.x + '-' + this.y + '=' + calculator.diff.call(this, this.x, this.y);
    },
    getMulti: function(x, y) {
        this.x = x;
        this.y = y;
        return this.x + '*' + this.y + '=' + calculator.multi.call(this, this.x, this.y);
    },
    getDiv: function(x, y) {
        this.x = x;
        this.y = y;
        return this.x + '/' + this.y + '=' + calculator.div.call(this, this.x, this.y);
    },
};

alert(info.getSum(1, 1));
alert(info.getDiv(1, 0));

/*5.	Есть следующий код:
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:
*/
//format.call(/* Ваш код */); // Ukraine
//format.apply(/* Ваш код */); // [Ukraine]
//format.call(/* Ваш код */); // Kyiv
//format.apply(/* Ваш код */); // Kyiv
//format.apply(/* Ваш код */); // undefined 

var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};
function format(start, end) {
    console.log(start + this.name + end);
}
format.call(country, name, '');
format.apply(country, ['[', ']']);
format.call(country.capital, name, '');
format.apply(country.capital, [name, '']);
format.apply(undefined,['']);

/*6.	Создайте объект user с полем name. Создайте функцию format с параметрами start и end:
function format(start, end) {
    console.log(start + this.name + end);
}

Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя
userFormat('<<<', '>>>'); // <<<John>>>
Реализуйте решение текущего задания используя метод bind().
*/

let user = {
    name: 'John',
};

function format(start, end) {
    console.log(start + this.name + end);
}

let userFormat = function(start, end) {
    format.call(user, start, end);
};
userFormat('<<<', '>>>');

// С использованием метода bind().

let user = {
    name: 'John',
};

function format(start, end) {
    console.log(start + this.name + end);
}

let userFormat = format.bind(user);
userFormat('<<<', '>>>');

/*7.	Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: 
разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello, 
которая которая выводит приветствие тому, кто передан в ее параметре: 
hello('World'); // Hello World
hello('John'); // Hello John
*/

function concat(s1, s2, s3 = ', ') {
    return function(s2) {
        console.log(s1 + s3 + s2);
    }
}
let hallo = concat('Hallo');
hallo('World');
hallo('John');

// Level Up. Рекурсия

/*1.	Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:
console.log( cube(2) ); // 8 
*/

/*Вариант - a)*/
function cube2(numb) {
    let arg1 = numb;

    for (let i = 1; i < 3; i++) {
        arg1 *= numb;
    }
    return arg1;
}
console.log(cube2(2));

/*Вариант - b) */
function cube(x, n = 3) {
    return (n == 1 ) ? x : (x * cube(x, n - 1));
  }
  console.log(cube(2));

  /*2.	Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:
  console.log( sum(1, 2, 3, 4, 5) ); // 15 */

function sum(...args) {
    return (args.length === 0) ? 0 : args[0] + sum(...args.slice(1));
}
console.log(sum(1, 2, 3, 4, 5, 5));


