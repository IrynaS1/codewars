/* Задача
Учитывая массив целых чисел в виде строк и чисел, 
верните сумму значений массива, как если бы все они были числами.

Верните свой ответ в виде числа.
*/

function sumMix(x) {
	console.log(x.map(element => Number(element)).reduce(function (sum, el) {
		return sum + el;
	}));
	return x.map(element => Number(element)).reduce(function (sum, el) {
		return sum + el;
	});



}

sumMix([9, 3, '7', '3']);