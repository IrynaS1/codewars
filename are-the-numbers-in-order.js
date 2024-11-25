/* Задача
Цифры в порядке?
В этой задаче ваша функция получает на вход массив целых чисел. Ваша задача — определить, 
отсортированы ли числа по возрастанию. Массив считается отсортированным по возрастанию,
 если нет двух соседних целых чисел, в которых левое число больше правого.

Для целей этой задачи вы можете считать, что все входные данные корректны, то есть 
представляют собой массивы, содержащие только целые числа.

Обратите внимание, что массив из 0 или 1 целого числа (чисел) автоматически 
считается отсортированным по возрастанию, поскольку все (нулевые) соседние 
пары целых чисел удовлетворяют условию, что левое целое число не превышает по значению правое целое число.

Например:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
Примечание. Если ваше решение проходит все фиксированные тесты, но не проходит случайные тесты, 
убедитесь, что вы не изменяете входной массив.

*/

function inAscOrder(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		arr[i] > arr[i + 1] ? newArr.push(0) : newArr.push(1);
	}

	let count = newArr.reduce((counter, el) => {
		return counter * el;
	});

	console.log(count > 0 ? true : false)
	return count > 0 ? true : false;

}

inAscOrder([1, 2, 4, 7, 19]);