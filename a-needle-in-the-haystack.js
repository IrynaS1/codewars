/* Задача
Можете ли вы найти иголку в стоге сена?

Напишите функцию, findNeedle() которая принимает array полный мусор, но содержащую "needle"

После того как ваша функция найдёт нужную строку, она должна вернуть сообщение (в виде строки), которое гласит:

"found the needle at position " плюс index он нашел иглу, так что:

Пример (Ввод --> Вывод)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

*/

function findNeedle(haystack) {
	let index = haystack.findIndex(el => el === 'needle');
	console.log(`found the needle at position ${index}`);
	return `found the needle at position ${index}`;
}


findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]);