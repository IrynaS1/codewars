/* Задача
Давайте создадим калькулятор.

Это очень простая ката Javascript.

В ходе теста ожидается, что вы предоставите объекту Calculator следующие методы:

Calculator.add()
Calculator.subtract()
Calculator.multiply()
Calculator.divide()
Каждый метод ожидает два аргумента, так что, например:

Калькулятор.add(1,4) должен возвращать 5.

Ожидается, что в качестве аргументов будут передаваться только целые числа, 
а метод divide должен возвращать «false» при попытке деления на ноль.
*/


var Calculator = {
	add: function (num1, num2) {
		console.log(num1 + num2);
		return num1 + num2;
	},
	subtract: function (num1, num2) {
		console.log(num1 - num2);
		return num1 - num2;
	},
	multiply: function (num1, num2) {
		console.log(num1 * num2);
		return num1 * num2;
	},
	divide: function (num1, num2) {
		if (num2 !== 0) {
			console.log(num1 / num2);
			return num1 / num2;
		} else {
			console.log(false);
			return false;
		}
	}
};



Calculator.add(2, 4);