/* Задача
Напишите функцию под названием calculate, которая принимает 3 значения. 
Первое и третье значения — это числа. Второе значение — это символ. 
Если символ — это «+», «-», «*» или «/», функция вернёт результат 
соответствующей математической операции с двумя числами. 
Если строка не является одним из указанных символов, 
функция должна вернуть значение null (выбросить ArgumentException в C#).

calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null
Помните, что нельзя делить на ноль. 
Если попытка деления на ноль будет предпринята, 
верните значение null (выдайте исключение ArgumentException в C#) (None в Python).
*/

function calculate(num1, operation, num2) {
	if (num2 === 0 && operation === '/') {
		console.log('На ноль делить нельзя -', null);
		return null;
	} else {
		const symbols = ['+', '-', '*', '/'];
		if (symbols.includes(operation)) {
			switch (operation) {
				case '+':
					console.log(num1 + num2);
					return num1 + num2;
				case '-':
					console.log(num1 - num2);
					return num1 - num2;
				case '*':
					console.log(num1 * num2);
					return num1 * num2;
				case '/':
					console.log(num1 / num2);
					return num1 / num2;
			}
		} else {
			console.log('Это не математическая операция -', null);
			return null;
		}
	}
}

calculate(-3, "+", 0);