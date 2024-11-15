/* Задача
Возьмите массив и удалите из него каждый второй элемент. Всегда оставляйте первый элемент и начинайте удалять со следующего.

Пример:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

Ни один из массивов не будет пустым, так что вам не о чем беспокоиться!
*/

function removeEveryOther(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i = i + 2) {
		newArr.push(arr[i]);
	}
	console.log(newArr);
	return newArr;
}

removeEveryOther(['Hello', 'Goodbye', 'Hello Again']);