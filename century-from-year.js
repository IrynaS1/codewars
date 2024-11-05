/* Задача 

Первый век длится с 1 года по и включая 100 год, второй век — с 101 года по и включая 200 год и т. д.

Задание
По истечении года верните век, в котором он находится.

Примеры
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28
*/

function century(year) {
	//return Math.round(year, 2);
	let str = year.toString();
	let lastSymbols = str.slice(-2);
	let firstSymbols = Number(str.substr(0, 2));

	if (year <= 100) {
		console.log('век - ', 1);
		return 1
	} else {
		if (lastSymbols !== '00') {
			let century = firstSymbols + 1;
			console.log('век - ', century);
		} else {
			console.log('век - ', firstSymbols);
		}
	}
}

century(89);