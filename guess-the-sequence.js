/* Задача
Вы прочитали заголовок: вам нужно угадать последовательность. 
Она будет как-то связана с указанным числом.

Пример
x = 16

result = [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]

*/

function sequence(x) {
	let arr = [];

	if (x < 10) {
		for (let i = 1; i <= x; i++) {
			arr.push(i);
		}
	} else {
		arr.push(1);
		for (let i = 10; i <= x; i++) {
			arr.push(i);
		}
		for (let i = 2; i < 10; i++) {
			arr.push(i);
		}
	}
	console.log(arr);
	return arr;
}

sequence(19);
