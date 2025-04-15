/* Задача

Создайте функцию, которая возвращает сумму двух наименьших положительных чисел из массива, 
состоящего как минимум из 4 положительных целых чисел. Не будут передаваться числа 
с плавающей точкой или неположительные целые числа.

Например, если массив передан в виде [19, 5, 42, 2, 77], то на выходе должно быть 7.

[10, 343445353, 3453445, 3453545353453] должен вернуться 3453455.

*/

function sumTwoSmallestNumbers(numbers) {
  let firstNum = Math.min(...numbers);
  let indexFirstNum = numbers.indexOf(firstNum);
  numbers = numbers.filter((el, index) => index !== indexFirstNum);
  let secondNum = Math.min(...numbers);
  console.log(firstNum + secondNum);
  return firstNum + secondNum;
}

sumTwoSmallestNumbers([142, 142, 184, 890]);
