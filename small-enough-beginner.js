/* Задача
Вам будут даны array и limit значения. Вы должны проверить, что все значения в 
массиве меньше или равны предельному значению. Если это так, верните true. В противном случае верните false.

Можно предположить, что все значения в массиве являются числами.
*/

function smallEnough(a, limit) {
	let count = 0;
	a.forEach(el => {
		if (el <= limit) {
			count++;
		}
	});

	console.log(count === a.length ? true : false);
	return count === a.length ? true : false;
}

smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100);
