/* Задача
Отладка синтаксиса If / else
Создавая игру, ваш напарник Грег решил создать функцию для проверки, жив ли пользователь, 
под названием checkAlive/CheckAlive/check_alive. К сожалению, Грег допустил несколько ошибок при создании функции.

checkAlive/CheckAlive/check_alive должно возвращать значение true, если здоровье 
игрока больше 0, или значение false, если оно равно 0 или меньше.

Функция получает один параметр health, который всегда будет целым числом от -10 до 10.

*/

function checkAlive(health) {
	if (health <= 0) {
		console.log(false);
		return false;
	} else {
		console.log(true);
		return true;
	}
}

checkAlive(5);

