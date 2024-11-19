/* Задача
В этой ката нужно умножить заданное число на восемь, 
если оно чётное, и на девять, если оно нечётное.

*/

function simpleMultiplication(number) {
	let num = number % 2 === 0 ? number * 8 : number * 9;
	console.log(num);
	return num;
}

simpleMultiplication(2);