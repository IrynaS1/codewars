/* Задача

В этом простом упражнении вы напишете функцию, которая принимает два целых числа: n и limit 
и возвращает список кратных n чисел, вплоть до limit включительно.

Гарантируется, что n > 0 и limit >= n.

Например, если переданные параметры — (2, 6), функция должна вернуть [2, 4, 6] как 2, 4, и 6 — кратные 2 вплоть до 6.

Примеры
n = 2; limit = 6 --> [2, 4, 6]
n = 2; limit = 5 --> [2, 4]

*/

function findMultiples(integer, limit) {
  let arr = [];
  for (let i = integer; i <= limit; i++) {
    arr.push(i);
  }
  console.log(arr.filter((el) => el % integer === 0));
  return arr.filter((el) => el % integer === 0);
}

findMultiples(5, 25);
