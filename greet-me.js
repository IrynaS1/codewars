/* Задача

Напишите метод, который принимает один аргумент в качестве имени, 
а затем приветствует пользователя, используя это имя с заглавной буквы и заканчивая приветствие восклицательным знаком.

Пример:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

*/

var greet = function (name) {
  let arr = name.split("");
  arr[0] = arr[0].toUpperCase();
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }
  name = arr.join("");
  console.log(`Hello ${name}!`);
  return `Hello ${name}!`;
};

greet("JACK");
