/* Задача
Вам будет предоставлен массив a и значение x. Всё, что вам нужно сделать, — 
это проверить, содержит ли предоставленный массив это значение.

Массив может содержать числа или строки. X может быть любым.

Верните, true если массив содержит значение, false если нет.
*/
function check(a, x) {
	if (a.includes(x)) {
		console.log(true);
		return true;
	} else {
		console.log(false);
		return false;
	}
}

check([66, 101], 66);