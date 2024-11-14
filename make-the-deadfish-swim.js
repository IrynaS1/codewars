/* Задача
Создайте синтаксический анализатор для интерпретации и выполнения языка Deadfish.

Deadfish работает с одним значением в памяти, которое изначально равно 0.

В нем используются четыре односимвольные команды:

i: Увеличьте значение
d: Уменьшите значение
s: Возведите значение в квадрат
o: Выведите значение в результирующий массив
Все остальные инструкции не действуют.

Примеры
Программа "iiisdoso" должна возвращать числа [8, 64].
Программа "iiisdosodddddiso" должна возвращать числа [8, 64, 3600].

*/

function parse(data) {
	let count = 0;
	let arr = [];
	data = data.split('');
	data.forEach(el => {
		if (el === 'i') {
			count = count + 1;
			return count;
		} else if (el === 'd') {
			count = count - 1;
			return count;
		} else if (el === 's') {
			count = count ** 2;
			return count;
		} else if (el === 'o') {
			arr.push(count);
			return count, arr;
		}
	});
	console.log('arr - ', arr);
	return arr;
}

parse('iiisxxxdoso');