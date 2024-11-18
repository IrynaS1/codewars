/* Задача
Учитывая строковые представления двух целых чисел, верните строковое представление суммы этих целых чисел.

Например:

sumStrings('1','2') // => '3'
Строковое представление целого числа не будет содержать никаких символов, кроме десяти цифр от «0» до «9».

Я удалил использование BigInteger и BigDecimal в Java

Python: ваше решение должно работать с огромными числами (около миллиона цифр), преобразование в int не сработает.


*/

function sumStrings(a, b) {
	let arr = [];
	arr.push(Number(a));
	arr.push(Number(b));

	let sum = String(arr.reduce((currentSum, currentNum) => {
		return currentSum + currentNum;
	}));
	console.log(sum);
	return sum;
}

sumStrings('123', '456');