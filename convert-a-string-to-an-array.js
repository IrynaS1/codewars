/* Задача
Напишите функцию для разделения строки на слова и преобразования её в массив слов.

Примеры (Ввод ==> Вывод):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

function stringToArray(string){
	console.log(string.split(' '));
	return string.split(' ');

}

stringToArray("Robin Singh");