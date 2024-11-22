/* Задача
Напишите функцию replaceAll (Python: replace_all), которая заменит все 
вхождения одного элемента другим.

Python / JavaScript: функция должна работать со строками и списками.

Пример: replaceAll [1,2,2] 1 2 -> в списке [1,2,2] мы заменяем 1 на 2, 
чтобы получить новый список [2,2,2]

replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]

*/

function replaceAll(seq, find, replace) {
	seq = seq.map(el => el === find ? el = replace : el);
	console.log(seq);
	return seq;
}

replaceAll([1, 2, 2], 1, 2);
