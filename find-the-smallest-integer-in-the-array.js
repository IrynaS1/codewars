/* Задача

Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.

Например:

Учитывая, [34, 15, 88, 2] ваше решение вернет 2
Учитывая, [34, -345, -1, 100] ваше решение вернет -345
Для целей этой задачи можно предположить, что предоставленный массив не будет пустым.

*/

function findSmallestInt(arr) {
  console.log(Math.min(...arr));
  return Math.min(...arr);
}

findSmallestInt([78, 56, 232, 12, 8]);
