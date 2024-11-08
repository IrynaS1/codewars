/* Задача
В вашем классе был тест, и вы его прошли. Поздравляем!

Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем средний ученик в вашем классе.

Вы получаете массив с результатами тестов ваших одноклассников. 
Теперь вычислите среднее значение и сравните свой результат!

Возвращайся, true если у тебя получится лучше, иначе false!

Примечание:
Ваши баллы не включены в общий список баллов вашего класса. Не забудьте их при подсчёте среднего балла!

*/

function betterThanAverage(classPoints, yourPoints) {
	let resultsClassmates = classPoints.reduce(function (count, el) {
		return count + el;
	});
	let averageResult = (resultsClassmates + yourPoints) / (classPoints.length + 1);
	if (yourPoints > averageResult) {
		console.log(true);
		return true;
	} else {
		console.log(false);
		return false;
	}
}

betterThanAverage([2, 3], 5);