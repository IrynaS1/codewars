/* Задача

Даны два целых числа a и b, которые могут быть положительными или отрицательными. 
Найдите сумму всех целых чисел между ними, включая их, и верните её. Если два числа равны, верните a или b.

Примечание: a и b не заказываются!

Примеры (a, b) --> вывод (объяснение)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Ваша функция должна возвращать только число, а не объяснение того, как вы получили это число.

*/

function getSum(a, b) {
  let arr = [];
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  console.log(arr.reduce((currentSum, currentNum) => currentSum + currentNum));
  return arr.reduce((currentSum, currentNum) => currentSum + currentNum);
}

getSum(0, -1);
