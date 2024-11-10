/* Задача
Вам дано случайное неотрицательное число, и вы должны вернуть цифры этого числа в массиве в обратном порядке.

Пример (Ввод => Вывод):
35231 => [1,3,2,5,3]
0 => [0]

*/

function digitize(n) {
	let arr = [];
	n.toString().split('').reverse().forEach(el => arr.push(Number(el)));
	console.log(arr);
	return arr;
}

digitize(35231);