/* Задача
Вы получаете массив чисел и возвращаете сумму всех положительных чисел.

Пример [1,-4,7,12] => 1 + 7 + 12 = 20

Примечание: если нечего суммировать, сумма по умолчанию равна 0.

*/

function positiveSum(arr) {
	if (arr.length > 0) {
		let newArr = [];
		arr.map(el => {
			if (el >= 0) {
				newArr.push(el);
				return newArr;
			} else {
				console.log(0);
				return 0;
			}
		});

		const sum = newArr.reduce(function (currentSum, currentNum) {
			return currentSum + currentNum;
		}, 0);

		console.log(sum);
		return sum;
	} else {
		console.log(0);
		return 0;
	}
}

positiveSum([1, 2, 3, 4, 5]);