/* Задача
Напишите функцию, которая преобразует имя в инициалы. В этой задаче нужно ввести два слова с одним пробелом между ними.

Выходные данные должны состоять из двух заглавных букв с точкой, разделяющей их.

Это должно выглядеть примерно так:

Sam Harris => S.H

patrick feeney => P.F

*/

function abbrevName(name) {
	let arr = name.toUpperCase().split(' ');
	let newArr = [];
	arr.forEach(el => {
		let firstLetter = el.split('')[0];
		newArr.push(firstLetter);
	});

	newArr[0] = newArr[0] + '.';
	let initials = newArr.join('');
	console.log(initials);
	return initials;
}

abbrevName("Sam Harris");