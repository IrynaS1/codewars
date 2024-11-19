/* Задача
Отладка функций
Это должно быть просто, начните с просмотра кода. Отладьте код, и функции должны заработать.

Есть три функции: Multiplication (x) Addition (+) и Reverse (!esreveR).

*/

function multi(arr) {
	let mPl = arr.reduce((currentMulti, currentNum) => {
		return currentMulti * currentNum;
	});
	console.log('function multi ', mPl);
	return mPl;
}
function add(arr) {
	let sum = arr.reduce((currentSum, currentNum) => {
		return currentSum + currentNum;
	});
	console.log('function add ', sum);
	return sum;
}
function reverse(str) {
	return str.reverse();
}

multi([5, 1, 5]);
add([9, 8, 5]);

