/* Задача
Отладочный преобразователь по Цельсию
Ваш друг едет за границу, в Соединённые Штаты, поэтому он написал программу для перевода градусов 
по Фаренгейту в градусы по Цельсию. К сожалению, в его коде есть несколько ошибок.

Найдите ошибки в коде, чтобы конвертер Цельсия работал должным образом.

Как преобразовать градусы Фаренгейта в градусы Цельсия:

celsius = (fahrenheit - 32) * (5/9)
Помните, что обычно температуры в текущих погодных условиях задаются целыми числами. 
Датчики температуры могут сообщать о температурах с более высокой точностью, например, с точностью до десятой. 
Однако ошибка прибора делает такого рода точность ненадежной для многих типов датчиков измерения температуры.

*/

function weatherInfo(temp) {
	var c = convertToCelsius(temp);
	if (c < 0) {
		console.log(c + " is freezing temperature");
		return (c + " is freezing temperature");
	} else {
		console.log(c + " is above freezing temperature");
		return (c + " is above freezing temperature");
	}
}

function convertToCelsius(temperature) {
	var celsius = (temperature - 32) * (5 / 9);
	console.log('celsius', celsius);
	return celsius;
}

weatherInfo(50);