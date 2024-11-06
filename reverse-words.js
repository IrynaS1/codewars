/* Задача
Напишите функцию, которая принимает строковый параметр и меняет местами каждое слово в строке. Все пробелы в строке должны сохраняться.

Примеры
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
	let arr = str.split(' ');
	let newArr = arr.map(element => {
		let newElement = element.split('').reverse().join('');
		return newElement;
	});

	console.log('Новая строка - ', newArr.join(' '));
	return newArr.join(' ');
}

reverseWords('The quick brown fox jumps over the lazy dog.')