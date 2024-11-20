/* Задача
В этом упражнении строка передаётся в метод, и необходимо вернуть новую 
строку с первым символом каждого слова в строке.

Например:

"This Is A Test" ==> "TIAT"
Строки будут содержать только буквы и пробелы, ровно по одному 
пробелу между словами и без начальных/конечных пробелов.
*/

function makeString(s) {
	let arr = s.split(' ');

	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i][0]);
	}
	let string = newArr.join('');
	console.log(string);
	return string;
}

makeString("sees eyes xray yoat");
