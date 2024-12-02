/* Задача

Создайте функцию, которая принимает целое число в качестве аргумента и 
возвращает "Even" для чётных чисел или "Odd" для нечётных чисел.
*/

function evenOrOdd(number) {
	console.log(number % 2 === 0 ? 'Even' : 'Odd');
	return number % 2 === 0 ? 'Even' : 'Odd';
}

evenOrOdd(2);
