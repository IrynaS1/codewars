/* Задача
Вы отправились в поход с друзьями далеко от дома, но когда пришло время возвращаться, 
вы поняли, что у вас заканчивается топливо, а ближайшая заправка находится в 50 нескольких милях! 
Вы знаете, что в среднем ваш автомобиль расходует около 25 миль на галлон. У вас осталось 2 галлонов.

Учитывая эти факторы, напишите функцию, которая сообщит вам, можно ли добраться до насоса.

Функция должна возвращать true если это возможно, и false если нет.

*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	let a = mpg * fuelLeft;
	console.log(a >= distanceToPump ? true : false);
	return a >= distanceToPump ? true : false;
};

zeroFuel(100, 50, 1);