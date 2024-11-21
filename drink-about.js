/* Задача
Дети пьют пунш.
Подростки пьют кока-колу.
Молодые люди пьют пиво.
Взрослые пьют виски.
Создайте функцию, которая получает возраст и возвращает то, что они пьют.

Правила:

Дети до 14 лет.
Подростки младше 18 лет.
Молодые люди моложе 21 года.
У взрослых их 21 и более.
Примеры: (Ввод --> Вывод)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

*/


function peopleWithAgeDrink(old) {
	if (old < 14) {
		console.log('drink toddy');
		return 'drink toddy';
	} else if (14 <= old && old < 18) {
		console.log('drink coke');
		return 'drink coke';
	} else if (18 <= old && old < 21) {
		console.log('drink beer');
		return 'drink beer';
	} else {
		console.log('drink whisky');
		return 'drink whisky';
	}
};

peopleWithAgeDrink(22);
