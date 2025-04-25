/* Задача

Учитывая два числа и арифметический оператор (его название в виде строки), 
верните результат применения этого оператора к двум числам.

a и b будут положительными целыми числами, и a всегда будет первым числом в операции, а b — вторым.

Четыре оператора — это «сложение», «вычитание», «деление» и «умножение».

Несколько примеров: (Вход1, Вход2, Вход3 --> Вывод)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Попробуйте сделать это без использования операторов if!

*/

function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      console.log(a + b);
      return a + b;
    case "subtract":
      console.log(a - b);
      return a - b;
    case "multiply":
      console.log(a * b);
      return a * b;
    case "divide":
      console.log(a / b);
      return a / b;
  }
}

arithmetic(8, 2, "subtract");
