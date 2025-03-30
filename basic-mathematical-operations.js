/* Задача

Ваша задача - создать функцию, которая выполняет четыре основные математические операции.

Функция должна принимать три аргумента: операцию (строку/символ), значение1 (число), значение2 (число).
Функция должна возвращать результат применения выбранной операции к числам.

Примеры(Оператор, значение1, значение2) --> вывод
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      console.log(value1 + value2);
      return value1 + value2;
    case "-":
      console.log(value1 - value2);
      return value1 - value2;
    case "*":
      console.log(value1 * value2);
      return value1 * value2;
    case "/":
      console.log(value1 / value2);
      return value1 / value2;
  }
}

basicOp("+", 4, 7);
