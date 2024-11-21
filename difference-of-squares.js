/* Задача
Найдите разность между квадратом суммы первых n натуральных чисел (1 <= n <= 100) и суммой их квадратов.

Пример
Например, когда n = 10:

Квадрат суммы чисел равен:

(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)² = 55² = 3025
Сумма квадратов чисел равна:

1² + 2² + 3² + 4² + 5² + 6² + 7² + 8² + 9² + 10² = 385
Следовательно, разница между квадратом суммы первых десяти натуральных чисел и 
суммой квадратов этих чисел равна: 3025 - 385 = 2640

*/

function differenceOfSquares(n) {
	let arr = [];

	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}

	let sum = arr.reduce((currentSum, currentNum) => {
		return currentSum + currentNum;
	});

	let squareSum = sum ** 2;

	let sumSquares = arr.reduce((currentSum, currentNum) => {
		return currentSum + currentNum ** 2;
	});

	console.log(squareSum - sumSquares);
	return squareSum - sumSquares;
}

differenceOfSquares(5);
