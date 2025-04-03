/* Задача

Напишите функцию, которая вычисляет среднее значение чисел в заданном массиве.

Примечание: Пустые массивы должны возвращать 0.

*/

function findAverage(array) {
  if (array.length > 0) {
    let sum = array.reduce((currentSum, currentNum) => {
      return currentSum + currentNum;
    });
    console.log(sum / array.length);
    return sum / array.length;
  } else {
    console.log(0);
    return 0;
  }
}

findAverage([1, 2, 3, 4]);
