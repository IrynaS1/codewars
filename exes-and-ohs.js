/* Задача
Проверьте, содержит ли строка одинаковое количество символов «x» и «o». 
Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любые символы.

Примеры ввода / вывода:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
	const arr = str.toLowerCase().split('');
	let countO = arr.filter(el => el === 'o');
	let countX= arr.filter(el => el === 'x');

	console.log(countO.length === countX.length ? true : false);
	return countO.length === countX.length ? true : false;
}

XO("ooom");