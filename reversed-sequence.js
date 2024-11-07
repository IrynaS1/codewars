/* Задача
Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.

Пример : n=5 --> [5,4,3,2,1]

*/

const reverseSeq = n => {
	let arr = [];
	for (let i = n; i > 0; i--) {
		arr.push(i);
	}
	console.log(arr);
	return arr;
};


reverseSeq(8);