/* Задача
Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
Если ваше имя начинается на букву «Р» или строчную «р», вы играете на банджо!

Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:

name + " plays banjo" 
name + " does not play banjo"
Приведенные имена всегда являются допустимыми строками.
*/

function areYouPlayingBanjo(name) {
	return name.toLowerCase().split('')[0] === 'r'
		? console.log(`${name} plays banjo`)
		: console.log(`${name} does not play banjo`);
}

areYouPlayingBanjo("rolf");