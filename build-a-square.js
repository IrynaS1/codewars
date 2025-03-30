/* Задача

Я дам вам целое число. Верните мне фигуру, длина и ширина которой равны этому числу. 
Это число будет целым от 1 до 50.

Пример
n = 3поэтому я ожидаю, что в качестве строки вернётся квадрат 3x3, как показано ниже:

+++
+++
+++

*/

function generateShape(integer) {
  let str = "";
  for (let i = 0; i <= integer; i++) {
    str = str + "+";
  }
  str = str + "/n";

  str = str.repeat(integer);

  console.log(str.slice(0, -1));
  return str.slice(0, -1);
}

generateShape(8);
