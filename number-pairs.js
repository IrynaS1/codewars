/* Задача
В этой задаче нужно сравнить каждую пару целых чисел из двух массивов и вернуть новый массив больших чисел.

Примечание: Оба массива имеют одинаковые размеры.

Пример:
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
*/

function getLargerNumbers(a, b) {
	let arr = [];

	for (let i = 0; i < a.length; i++) {
		a[i] > b[i] ? arr.push(a[i]) : arr.push(b[i]);
	}

	console.log(arr);
	return arr;
}

getLargerNumbers([34, -64, 15, 17, 88], [23, 14, 53, 17, 80]);
