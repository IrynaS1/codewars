/* Задача

Сегодня пятница, 13-е, и Джейсон готов к своему первому убийству!

Создайте функцию killcount, которая принимает два аргумента: массив пар массивов 
(имя советника и его интеллект — [«Чэд», 2]) и целое число, представляющее интеллект Джейсона.

Рубин, Питон, Кристалл:

counselors = [["Chad", 2], ["Tommy", 9]]
jason = 7
JavaScript:

var counselors = [["Chad", 2], ["Tommy", 9]];
var jason = 7;
PHP:

$counselors = [["Chad", 2], ["Tommy", 9]];
$jason = 7;
Ваша функция должна возвращать массив с именами всех вожатых, которых Джейсон может перехитрить и убить.

Счастливой пятницы, 13-го!

*/

function killcount(counselors, jason) {
  let arrNames = [];
  counselors.forEach((el) => {
    if (jason > el[1]) arrNames.push(el[0]);
  });
  console.log(arrNames);
  return arrNames;
}

killcount(
  [
    ["Mike", 7],
    ["Alysa", 3],
  ],
  7
);
