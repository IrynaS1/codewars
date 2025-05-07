/* Задача

Дан двумерный (вложенный) список (массив, вектор и т. д.) размером m * n 
Ваша задача — найти сумму минимальных значений в каждой строке.

Например:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
Таким образом, функция должна возвращать 26, потому что сумма минимумов равна 1 + 5 + 20 = 26.

Примечание: вам всегда будет предоставляться непустой список, содержащий положительные значения.

*/

function sumOfMinimums(arr) {
  let minNums = [];
  arr.forEach((el) => {
    minNums.push(Math.min(...el));
  });
  const sum = minNums.reduce((s, n) => {
    return s + n;
  });
  console.log(sum);
  return sum;
}

sumOfMinimums([
  [7, 9, 8, 6, 2],
  [6, 3, 5, 4, 3],
  [5, 8, 7, 4, 5],
]);
