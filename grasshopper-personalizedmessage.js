/* Задача
Создайте функцию, которая выдаёт персонализированное приветствие. Эта функция принимает два параметра: name и owner.

Используйте условные обозначения, чтобы вернуть правильное сообщение:

кейс	Возврат
имя равно владельцу	"Привет, босс"
в противном случае	"Привет, гость"

*/

function greet(name, owner) {
	console.log(name === owner ? 'Hello boss' : 'Hello guest');
	return name === owner ? 'Hello boss' : 'Hello guest';
}

greet('Greg', 'Daniel');