/* Задача
Напишите функцию, которая возвращает последовательность (индекс начинается с 1) 
всех чётных символов из строки. Если длина строки меньше двух 
символов или больше 100 символов, функция должна возвращать «некорректную строку».

Например:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
*/

function evenChars(string) {
	let arr = string.split('');
	let newArr = [];

	if (arr.length > 1 && arr.length <= 100) {
		for (let i = 0; i < arr.length - 1; i++) {
			if (i % 2 === 0) {
				newArr.push(arr[i + 1]);
			}

		}
		console.log(newArr);
		return newArr;
	} else {
		console.log('invalid string');
		return 'invalid string';
	}
}

evenChars("1234");
