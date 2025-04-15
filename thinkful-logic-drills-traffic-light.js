/* Задача

Вы пишете код для управления светофорами вашего города. 
Вам нужна функция для обработки каждого изменения с green, на yellow, на red, а затем снова на green.

Напишите функцию, которая принимает в качестве аргумента строку, 
представляющую текущее состояние лампочки, и возвращает строку, представляющую состояние, в которое должна перейти лампочка.

Например, когда ввод равен green, вывод должен быть yellow.

*/

function updateLight(current) {
  switch (current) {
    case "green":
      console.log("yellow");
      return "yellow";
    case "red":
      console.log("green");
      return "green";
    case "yellow":
      console.log("red");
      return "red";
  }
}

updateLight("green");
