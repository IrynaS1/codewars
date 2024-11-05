/* Задача
Ваша задача очень проста:
написать функцию hasOneChar, возвращающую:

true если данная строка содержит один и тот же символ, повторяющийся по всей строке
false в противном случае.
Например:

hasOneChar('aaaaa'); //true
hasOneChar('aaaab'); //false
hasOneChar('bbbbb'); //true
hasOneChar('bbabb'); //false
Конечно, первое, что приходит на ум, - это цикл. 
Но цель этого ката - проверить вашу креативность.
Вы должны достичь этого без использования каких-либо циклов.

Крайние случаи: функция hasOneChar должна возвращать true, 
если строка содержит один символ.
*/

function hasOneChar(s) {
	let str = s.split('');
	if (str.length > 1) {
		let compare = str.every(el => {
			return el === str[0];
		});
		if (compare === true) {
			console.log(true);
			return true;
		} else {
			console.log(false);
			return false;
		}
	} else {
		console.log(true);
		return true;
	}

}

hasOneChar("bbbbmb");