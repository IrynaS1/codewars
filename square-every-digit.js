/* Задача
Добро пожаловать. В этой задаче вам нужно возвести в квадрат каждую цифру числа и объединить их.

Например, если мы применим функцию к числу 9119, получится 811181, потому что 92 равно 81, а 12 равно 1. (81-1-1-81)

Пример № 2: при вводе 765 будет/должно получиться 493625, потому что 72 равно 49, 62 равно 36, а 52 равно 25. (49-36-25)

Примечание: Функция принимает целое число и возвращает целое число.
*/

function squareDigits(num) {
	let arr = [];
	num.toString().split('').map(function (el) {
		el = Number(el) ** 2;
		console.log(el.toString());
		return arr.push(el.toString());
	});
	num = Number(arr.join(''));
	console.log('num', num);
	return num;
}

squareDigits(3212);