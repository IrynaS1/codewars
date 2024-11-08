/* Задача
Если тебе не спится, просто посчитай овец!!

Например, если дано неотрицательное целое число 3, 
верните строку с бормотанием: "1 sheep...2 sheep...3 sheep...". 
Ввод всегда будет корректным, то есть без отрицательных целых чисел.

*/

var countSheep = function (num) {
	let count = '';
	if (num === 0) {
		console.log(count);
		return count;
	} else {
		for (let i = 1; i <= num; i++) {
			count = count + `${i} sheep...`
		}
		console.log(count);
		return count;
	}
}

countSheep(0);