/* Задача
Возвращает количество гласных в заданной строке.

В этой ката мы будем считать a, e, i, o, u гласными (но не y).

Строка ввода будет состоять только из строчных букв и / или пробелов.
*/

function getCount(str) {
	let vowels = ['a', 'e', 'i', 'o', 'u'];

	let arr = str.split('');
	arr = arr.filter(el => vowels.includes(el));
	console.log(arr.length);

	return arr.length;
}

getCount("abracadabra");