/* Задача
Codewars Bar рекомендует выпивать 1 стакан воды на каждый стандартный напиток, 
чтобы на следующее утро у вас не было похмелья.

Ваши коллеги-программисты купили вам сегодня вечером несколько напитков 
в виде строки. Верните строку, в которой указано, 
сколько стаканов воды вам нужно выпить, чтобы не страдать от похмелья.

Примеры
"1 beer"  -->  "1 glass of water"
because you drank one standard drink

"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks
Примечание:

Для простоты мы будем считать, что любая «пронумерованная вещь» 
в строке — это напиток. Даже "1 bear" -> "1 glass of water"; 
или "1 chainsaw and 2 pools" -> "3 glasses of water"...

*/

function hydrate(s) {
	let arr = [];
	s.split(' ').forEach(el => {
		if (Number(el)) {
			arr.push(Number(el));
		}
	});
	let count = arr.reduce((sum, num) => {
		return sum + num;
	});

	console.log(count === 1 ? `${count} glass of water` : `${count} glasses of water`);
	return count === 1 ? `${count} glass of water` : `${count} glasses of water`;
}

hydrate("2 glasses of wine and 1 shot");
