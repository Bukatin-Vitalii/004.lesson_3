// Написати цикли, які зможуть:

//9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//10 Визначити кількість його парних дільників.
//11 Знайти суму його парних дільників.
//12 Надрукувати повну таблицю множення від 1 до 10.

//1 Вивести на сторінку в один рядок через кому числа від 10 до 20.
let arr1 = [];
for (let i = 10; i <= 20; i++) {
	arr1.push(i);
}
let div1 = document.querySelector('.div1');
div1.innerHTML = arr1.join(', ');

//2 Вивести квадрати чисел від 10 до 20.
let arr2 = [];
for (let i = 10; i <= 20; i++) {
	arr2.push(i * i);
}
let div2 = document.querySelector('.div2');
div2.innerHTML = arr2.join(', ');

//3 Вивести таблицю множення на 7.
let arr3 = [];
for (let i = 1; i <= 10; i++) {
	arr3.push(i * 7);
}
let div3 = document.querySelector('.div3');
div3.innerHTML = arr3.join(', ');

//4 Знайти суму всіх цілих чисел від 1 до 15.
let sum4 = 0;
for (let i = 1; i <= 15; i++) {
	sum4 += i;
}
let div4 = document.querySelector('.div4');
div4.innerHTML = sum4;

//5 Знайти добуток усіх цілих чисел від 15 до 35.
let mult5 = 1;
for (let i = 15; i <= 35; i++) {
	mult5 *= i;
}
let div5 = document.querySelector('.div5');
div5.innerHTML = mult5;

//6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum6 = 0;
for (let i = 1; i <= 500; i++) {
	sum6 += i;
}
let div6 = document.querySelector('.div6');
div6.innerHTML = sum6 / 500;

//7 Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sum7 = 0;
for (let i = 30; i <= 80; i++) {
	if (i % 2 === 0) {
		sum7 += i;
	}
}
let div7 = document.querySelector('.div7');
div7.innerHTML = sum7;

//8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let arr8 = [];
for (let i = 100; i <= 200; i++) {
	if (i % 3 === 0) {
		arr8.push(i);
	}
}
let div8 = document.querySelector('.div8');
div8.innerHTML = arr8.join(', ');

//9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let num9 = 100;
let arr9 = [];
for (let i = 1; i <= num9; i++) {
	if (num9 % i === 0) {
		arr9.push(i);
	}
}
let div9 = document.querySelector('.div9');
div9.innerHTML = arr9.join(', ');

//10 Визначити кількість його парних дільників.
let num10 = 100;
let arr10 = [];
for (let i = 1; i <= num10; i++) {
	if (num10 % i === 0 && i % 2 === 0) {
		arr10.push(i);
	}
}
let div10 = document.querySelector('.div10');
div10.innerHTML = arr10.length;

//11 Знайти суму його парних дільників.
let num11 = 100;
let arr11 = [];
for (let i = 1; i <= num11; i++) {
	if (num11 % i === 0 && i % 2 === 0) {
		arr11.push(i);
	}
}
let div11 = document.querySelector('.div11');
div11.innerHTML = arr11.reduce((a, b) => a + b);

//12 Надрукувати повну таблицю множення від 1 до 10.
let arr12 = [];
for (let i = 1; i <= 10; i++) {
	for (let j = 1; j <= 10; j++) {
		arr12.push(i * j);
	}
}
let div12 = document.querySelector('.div12');
div12.innerHTML = arr12.join(', ');