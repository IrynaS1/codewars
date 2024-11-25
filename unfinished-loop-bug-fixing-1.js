/* Задача
Незаконченный цикл - исправление ошибки # 1
О нет, Тимми создал бесконечный цикл! Помогите Тимми найти 
и исправить ошибку в его незаконченном цикле for!

*/

function createArray(number) {
	var newArray = [];

	for (var counter = 1; counter <= number; counter++) {
		newArray.push(counter);
	}

	console.log(newArray);
	return newArray;
}
createArray(5);
