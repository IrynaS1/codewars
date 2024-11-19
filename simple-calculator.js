/* Задача
ам нужно создать простой калькулятор, который будет возвращать результат сложения, вычитания, умножения или деления двух чисел.

Ваша функция будет принимать три аргумента:
Первый и второй аргументы должны быть числами.
Третий аргумент должен представлять собой знак, указывающий на операцию, которую нужно выполнить с этими двумя числами.

если переменные не являются числами или знак не входит в приведённый выше список, 
должно быть возвращено сообщение «неизвестное значение».

Пример:
calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"

*/

function calculator(a, b, sign) {
	let symbols = ['+', '-', '/', '*'];
	let result;
	if (typeof a !== 'number' || typeof b !== 'number' || !symbols.includes(sign)) {
		console.log('unknown value');
		return 'unknown value';
	} else {
		switch (sign) {
			case '+':
				result = a + b;
				break;
			case '-':
				result = a - b;
				break;
			case '/':
				result = a / b;
				break;
			case '*':
				result = a * b;
				break;
		}
		console.log('result', result);
		return result;
	}
}

calculator(6, 2, "+");

