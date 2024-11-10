/* Задача
Дополните метод, который принимает логическое значение и возвращает строку "Yes" для true или строку "No" для false.

*/

function boolToWord(bool) {
	console.log(bool === true ? 'Yes' : 'No');
	return bool === true ? 'Yes' : 'No';
}

boolToWord(true);