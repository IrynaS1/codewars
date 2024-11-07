/* Задача
В этом простом задании вам дано число, которое нужно сделать отрицательным. 
Но, может быть, число уже отрицательное?

Примеры
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Примечания
Число уже может быть отрицательным, и в этом случае никаких изменений не требуется.
Ноль (0) не проверяется на наличие какого-либо конкретного знака. Отрицательные нули 
не имеют математического смысла.

*/

function makeNegative(num) {
	if (num === 0) {
		console.log(num);
		return 0;
	} else if (num < 0) {
		console.log(num);
		return num;
	} else if
		(num > 0) {
		console.log(num * -1);
		return num * -1;
	}
}

makeNegative(42)