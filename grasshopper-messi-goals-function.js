/* Задача
Функция голов Месси
Месси - футболист, забивший в трех лигах:

ЛаЛига
Copa del Rey
Чемпионы
Завершите функцию, чтобы вернуть его общее количество голов во всех трех лигах.

Примечание: входные данные всегда будут действительными.

Например:

5, 10, 2  -->  17
*/

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
	console.log(laLigaGoals + copaDelReyGoals + championsLeagueGoals);
	return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

goals(43, 10, 5);