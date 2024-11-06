/* Задача
Тимми и Сара думают, что они влюблены, но в том месте, 
где они живут, они узнают об этом, только когда сорвут по цветку. 
Если у одного из цветов чётное количество лепестков, а у другого — нечётное, значит, они влюблены.

Напишите функцию, которая будет принимать количество лепестков 
у каждого цветка и возвращать значение true, если они влюблены, и false, если нет.

*/

function lovefunc(flower1, flower2) {
	let isEvenOrOdd = (flower) => {
		if (flower % 2 === 0) {
			return 'even';
		} else {
			return 'odd';
		}
	}

	if (isEvenOrOdd(flower1) === isEvenOrOdd(flower2)) {
		console.log(false);
		return false;
	} else {
		console.log(true);
		return true;
	}
}

lovefunc(2, 2);