/* Задача
Вам дан список уникальных целых чисел arr и два целых числа a и b. 
Ваша задача — определить, являются ли a и b последовательными в arr, 
и вернуть логическое значение (True если a и b являются последовательными,
 False в противном случае).

Гарантируется, что a и b оба присутствуют в arr.

*/

function consecutive(arr, a, b) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === a) {
			if (arr[i + 1] === b || arr[i - 1] === b) {
				console.log(true);
				return true;
			} else {
				console.log(false);
				return false;
			}
		}
	}
}

consecutive([1, 3, 5, 7], 3, 7);
