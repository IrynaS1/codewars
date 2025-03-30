/* Задача

Напишите функцию, которая принимает на вход число и возвращает сумму 
абсолютных значений каждой десятичной цифры числа.

Например: (Ввод --> Вывод)

10 --> 1
99 --> 18
-32 --> 5
Предположим, что все числа во входных данных будут целыми.

*/

function sumDigits(number) {
  let array = number.toString().split("");
  array = array.filter((el) => el !== "-");
  array = array.map((el) => parseInt(el));
  let sum = array.reduce((currentSum, currentNum) => {
    return currentSum + currentNum;
  });
  console.log(sum);
  return sum;
}

sumDigits(-32);
