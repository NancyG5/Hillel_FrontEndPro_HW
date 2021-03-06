// Переменные и выражения
/*1. Создайте три переменные. Присвойте первой переменной числовое значение. 
Вторая переменная равна первой переменной, увеличенной в три раза. 
Третья переменная равна сумме двух первых. Выведите на экран все три.*/

let one = 9;

let two = one * 3;

let three = one + two;

console.log (one, two, three);

/*2. Создайте переменные firstName и lastName для хранения имени и фамилии, 
запишите в них значения из модального окна prompt. 
Выведите на экран приветствие “What’s up (firstName) (lastName)”.
*/ 

let firstName = prompt ('Имя');

let lastName = prompt ('Фамилия');

console.log (`What's up`, firstName, lastName);
//alert (`What's up ${firstName}, ${lastName}`);

/* 3. Создайте переменные x и y для хранения числа. Значения переменные получают из prompt. 
Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно отобразите в модальном окне.
*/

let x = prompt ('Введите значение х');

let y = prompt ('Введите значение y');

alert (x * y);
alert (x / y);
alert (x + y);
alert (x - y);

/*4. Напишите в переменных формулу для расчета з/п за июль с учетом, что количество рабочий часов, 
количество рабочих дней в неделе и рейт за час – значения читаются из prompt. 
(Просчитывать какой это месяц, 30 или 31 день не нужно).*/

let week = 4; // Полные рабочие недели в июле;

let day = prompt ('Введи количество отработанных дней в неделю');

let watch = prompt ('Введи количество отработанных часов за день');

let hour = prompt ('Рейт за час');

let salaryMonth = week * day * watch * hour;

console.log (salaryMonth);

//5. Напишите программу, которая определяет, является ли число, введенное пользователем, нечётным.

let a = prompt ('Введи число');

alert (a % 2 == 0);

//Второй вариант решение через if,else;

let a1 = prompt ('Введи число');

if (a1 & 1) {
    alert ('Нечетное');
}
else {
    alert ('Четное');
}

//6. Напишите программу, которая проверяет является ли значение, введенное пользователем, числом.

let a2 = prompt ('Введи что-то');

alert (a2 >= 0 && a2 <= Infinity);

/*7. Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите. 
Получите второе число из окна prompt. Сравните и отобразите в модальном окне: первое число меньше второго или нет, 
а также оба значения.
*/

let a3 = Math.random ();

let b = Math.round (a * 100);

let c = prompt ('Введи число');

alert (`Введенное число больше рандомного? = ${b <= c}, Рандомное число = ${b}, Введенное число = ${c}`);

/*8. Создайте переменную str и запишите в нее из prompt такое предложение «Мне нравится изучать Front-end». 
Также создайте еще одну переменную и запишите в нее из prompt то, что вам нравится изучать. 
С помощью методов строки определите существует ли то что вам нравится изучать в исходной строке str. 
Также возьмите подстроку «Мне нравится изучать » из исходной переменной str сохраните ее в отдельной переменной. 
Создайте еще одну переменную result куда запишите результирующую строку объединяющую «Мне нравится изучать »
и то что вам нравится изучать (примените для этого обратные кавычки ` `). Отобразите результат в модальном окне.
*/

let str = prompt ('', 'Мне нравится изучать Front-end');

let str2 = prompt ('Что нравится изучать тебе?');

//console.log (str.indexOf (str2));

if (str.indexOf (str2) === -1) {
    alert ('Совпадений не найдено');
}
else {
    alert ('Есть совпадение');
};

let str3 = str.slice (0,20);

let result = str3 + ` ${str2}`;

alert (result);