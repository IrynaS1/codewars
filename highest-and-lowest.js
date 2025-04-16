/* Задача

В этом небольшом задании вам дана строка чисел, разделённых пробелами, и нужно вернуть самое большое и самое маленькое числа.

Примеры
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Примечания
Все номера действительны Int32, нет необходимости их подтверждать.
Во входной строке всегда будет хотя бы одно число.
В выходной строке должно быть два числа, разделённых одним пробелом, причём большее число должно стоять первым.

*/

function highAndLow(numbers) {
  let array = numbers.split(" ");
  array = array.map((el) => Number(el));
  let maxNumber = Math.max(...array);
  let minNumber = Math.min(...array);
  console.log(`${maxNumber} ${minNumber}`);
  return `${maxNumber} ${minNumber}`;
}

highAndLow("1 2 3");
