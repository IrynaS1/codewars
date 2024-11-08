/* Задача
Тролли атакуют ваш раздел комментариев!
Распространённый способ справиться с этой ситуацией — удалить из комментариев троллей все гласные, нейтрализовав угрозу.
Ваша задача — написать функцию, которая принимает строку и возвращает новую строку без гласных.
Например, строка «Этот сайт для неудачников, ха-ха!» превратится в «Ths wbst s fr lsrs LL!».
Примечание: в этом ката y не считается гласной.
*/

function disemvowel(str) {
	let vowels = ['a', 'e', 'o', 'i', 'u'];

	let newArr = [];
	str.split(' ').forEach(el => {
		el = el.split('');
		let els = el.filter(letter => {
			if (!vowels.includes(letter.toLowerCase())) {
				return letter;
			}
		});
		el = els.join('');
		return newArr.push(el);

	});
	str = newArr.join(' ');
	console.log('newStr ', str);
	return str;
}

disemvowel("This website is for losers LOL!");