/* Задача
Это конец учебного года, судьбоносный момент вашего школьного отчёта. Нужно подсчитать средние баллы. 
Все ученики приходят к вам и просят подсчитать их средние баллы. Легко! Вам просто нужно написать сценарий.

Верните среднее значение заданного массива, округлённое вниз до ближайшего целого числа.

Массив никогда не будет пустым.

*/

function getAverage(marks) {
	let count = marks.reduce((sum, num) => {
		return sum + num;
	});

	console.log(Math.floor(count / (marks.length - 1)));
	return Math.floor(count / (marks.length - 1));
}

getAverage([2, 2, 2, 2]);
