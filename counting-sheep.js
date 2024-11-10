/* Задача
Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать. 
Нам нужна функция, которая подсчитывает количество овец в массиве (истина означает наличие).

Например,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
Правильный ответ был бы 17.

Подсказка: не забудьте проверить наличие недопустимых значений, таких как null/undefined
*/

function countSheeps(sheep) {
	let count = 0;
	sheep.forEach(el => {
		if (el === true) {
			count++;
		}
	});
	console.log(count);
	return count;
}

countSheeps([undefined, null, false, true]);