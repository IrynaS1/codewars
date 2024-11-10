/* Задача
Учитывая непустой массив целых чисел, верните результат умножения значений по порядку. Пример:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(x) {
	let multiply = x.reduce(function (currentSum, currentNumber) {
		return currentSum * currentNumber;
	});
	console.log(multiply);
	return multiply;
}

grow([1, 2, 3]);