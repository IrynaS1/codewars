/* Задача
Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.
*/

function removeExclamationMarks(s) {
	let arr = s.split('');
	arr = arr.filter(el => el !== '!')
	console.log(arr.join(''));
	return s = arr.join('');
}

removeExclamationMarks("Hello World!");